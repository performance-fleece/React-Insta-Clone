import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';

const defaultState = {
  posts: dummyData
}

class App extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
    // console.log(this.state.posts)
  }

  render() {
    return (
      <div className="App">
        <div className="insta-app">
          <SearchBar />
          {this.state.posts.map(posts => (
            <PostContainer key={posts.id} posts={posts} />
          ))}
        </div>
      </div>
    );
  }
}


export default App;
