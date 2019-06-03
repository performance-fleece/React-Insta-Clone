import React from "react";
import PostHeader from './PostHeader';
import LikeContainer from './LikeContainer';

const Posts = props => {
  return (
    <div className="post-wrapper">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <img className="image-url" alt="" src={props.post.imageUrl} />
      <LikeContainer likes={props.post.likes} />

    </div>
  );
};

export default Posts;
