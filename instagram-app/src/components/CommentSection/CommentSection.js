import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
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
  }

  // addComment = event => {
  //   event.preventDefault();
  //   const newComment = {
  //     id: Date.now(),
  //     username: "Test User",
  //     text: this.state.comment
  //   };
  //   const comments = this.state.comments.slice();
  //   comments.push(newComment);
  //   this.setState({ comments, comment: "" });
  // };

  render() {
    return (
      <div className="comment-wrapper">
        {this.state.comments.map(comment => (
          <Comment
            key={comment.id}
            username={comment.username}
            text={comment.text}
          />
        ))}
        <CommentForm
          comment={this.state.comment}
          addComment={this.addComment}
          changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

export default CommentSection;
