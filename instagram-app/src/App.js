import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

const initState = {
  posts: dummyData,
  searchPosts: [],
  searchString: ""
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initState;

    // console.log(this.state.posts)
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  testHandler () {
    let currentPosts = [];
    let filterPost = [];
    if(this.state.searchString !== "") {
      currentPosts = this.state.posts;
      filterPost = currentPosts.filter(post => {
        const lc = post.username.toLowerCase();
        const filter = this.state.searchString.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      filterPost = this.state.posts;
    }
    this.setState({ searchPosts: filterPost })
  }



  componentWillReceiveProps(nextProps) {
    this.setState({
      searchPosts: nextProps.posts
    });
  }

  // Testing local storage

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

  render() {
    return (
      <div className="App">
        <div className="insta-app">
          <SearchBar
            changeHandler={this.changeHandler}
            searchString={this.state.searchString}
            testHandler={this.state.testHandler}
            // searchPostsHandler={this.state.searchPostsHandler}
          />
          <PostContainer
            posts={
              this.state.searchPosts
            }
          />
        </div>
      </div>
    );
  }
}


export default App;
