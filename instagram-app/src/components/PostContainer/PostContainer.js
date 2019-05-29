import React from "react";
import Posts from './Posts';
import "./PostContainer.css";


const PostContainer = props => {
  return (
    <div className="post-container">
      {props.posts.map(post => 
        <Posts key={props.posts.id} post={post} />
        )}
      
    </div>
  );
};

export default PostContainer;
