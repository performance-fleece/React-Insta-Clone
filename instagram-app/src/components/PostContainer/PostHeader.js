import React from "react";

const PostHeader = props => {
    return (
      <div className="post-header">
        <div className="post-user">
          <img className="img-thumb" alt="" src={props.thumbnailUrl} />
          <h4>{props.username}</h4>
        </div>
        <div className="post-image-wrapper">
          <img className="post-image" alt="" src={props.imageUrl} />
        </div>
      </div>
    );
}

export default PostHeader;