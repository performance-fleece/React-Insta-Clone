import React from 'react';

const PostContainer = props => {
    return (
        <div className='post-container'>
        <p>{props.posts.username}</p>


        </div>
    )
};

export default PostContainer;