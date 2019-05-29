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
      let newComment = {
          
      }
  }

  render() {
    return (
      <div className="comment-wrapper">
        {this.props.comments.map(comment => (
          <Comment username={comment.username} text={comment.text} />
        ))}
        <CommentForm changeHandler={this.changeHandler} />
      </div>
    );
  }
}

export default CommentSection;
