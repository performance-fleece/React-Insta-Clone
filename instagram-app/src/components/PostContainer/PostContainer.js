import React from "react";
import commentIcon from "./commentIcon.png";
import likeIcon from "./likeIcon.png";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img className="img-thumb" alt="" src={props.posts.thumbnailUrl} />
        <h4>{props.posts.username}</h4>
      </div>
      <img className="post-image" alt="" src={props.posts.imageUrl} />
      <div className="comment-container">
        <div className="post-icons">
          <img className="comment-icon" alt="" src={commentIcon} />
          <img className="comment-icon" alt="" src={likeIcon} />
        </div>
        <p className="comment-likes">{props.posts.likes} likes</p>
        <div className="comment-rows">
          {props.posts.comments.map(comments => (
            <CommentSection key={comments.id} comments={comments} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
