import React from "react";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: [],
      search: ""
    };
  }

  changeHandler = event => {
    this.setState({ search: event.target.value });
  };

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPosts = () => {
    const filtered = this.state.posts.filter(post => {
      if (post.username.includes(this.state.search.toLowerCase())) {
        return post;
      }
    });
    this.setState({ 
      filteredPosts: filtered
     });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          searchPosts={this.searchPosts}
          changeHandler={this.changeHandler}
          search={this.state.search}
        />
        <PostContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default App;
