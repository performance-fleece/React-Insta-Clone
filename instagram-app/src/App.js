import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
    // console.log(this.state.posts)
  }

  componentDidMount () {
    console.log(dummyData);
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      <div className="App">
        <div className="insta-app">
          <SearchBar />
          <PostContainer posts={this.state.posts} />
          </div>
      </div>
    );
  }
}


export default App;
