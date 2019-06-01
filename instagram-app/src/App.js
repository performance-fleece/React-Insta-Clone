import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData })
  }


  changeHandler = event => {
    // eslint-disable-next-line array-callback-return
    const posts = this.state.posts.filter(post => {
      if(post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: posts });
  };





  render() {


    return (
      <div className="App">
        <div className="insta-app">
          <SearchBar
            searchTerm={this.state.searchTerm}
            changeHandler={this.changeHandler}
          />
          <PostContainer
            posts={this.state.filteredPosts.length > 0
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
