import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      filteredPosts: []
    };
  }

  // componentDidMount() {
  //   this.setState({ posts: dummyData });
  // }

  onKeyPress(event) {
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    };
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  searchHandler = event => {
    // eslint-disable-next-line array-callback-return
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  changeSearch = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Local Storage
  componentDidMount() {
    this.hydrateState();

    window.addEventListener("beforeunload", this.saveStateToLocal.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocal();
  }

  hydrateState() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocal() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  // Local Storage End


  render() {
    return (
      <div className="App">
        <div className="insta-app">
          <SearchBar
            stopSubmit={this.onKeyPress}
            searchTerm={this.state.searchTerm}
            searchHandler={this.searchHandler}
          />
          <PostContainer
            posts={
              this.state.filteredPosts.length > 0
                ? this.state.filteredPosts
                : this.state.posts
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
