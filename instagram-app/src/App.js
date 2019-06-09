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
      addComment: '',
      search: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
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

  addComment = event => {
    event.preventDefault();
    if (this.state.comment === "") {
      console.log("empty comment");
    } else {
      const newComment = {
        id: Date.now(),
        username: "Test User",
        text: this.state.comment
      };
      const comments = this.state.comments.slice();
      comments.push(newComment);
      this.setState({ comments, comment: "" });
    }
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
