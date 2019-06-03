import React from 'react';
import './PostContainer.css';
import Posts from './Posts';

const PostContainer = props => {
    return (
        <div className="post-container">
            {props.posts.map(post => 
                <Posts key={post.imageUrl} post={post} />
                )}
        </div>
    );
};

export default PostContainer;