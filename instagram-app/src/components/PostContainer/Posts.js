import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";
import LikeContainer from "./LikeContainer";
import "./PostContainer.css";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes,
      isLiked: false 
    };
  }

  addLikes = () => {
    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }
  };


  render() {
    return (
      <div className="post-wrapper">
        <PostHeader
          thumbnailUrl={this.props.post.thumbnailUrl}
          username={this.props.post.username}
          imageUrl={this.props.post.imageUrl}
        />
        <LikeContainer addLikes={this.addLikes} likes={this.state.likes} />
        <CommentSection comments={this.props.post.comments} />
      </div>
    );
  }
}

export default Posts;
