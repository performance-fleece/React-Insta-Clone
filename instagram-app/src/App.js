import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


class App extends React.Component {
  constructor() {
    super();
    this.state = [];
    // console.log(this.state.posts)
  }

  componentDidMount () {
    this.setState({ posts: dummyData })
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
