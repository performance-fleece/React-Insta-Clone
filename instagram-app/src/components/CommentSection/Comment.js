import React from 'react';

const Comment = props => {
    return (
        <div className="comment-wrapper">
            <span className="comment-name">{props.username}</span>
            <span className="comment-text">{props.text}</span>
        </div>
    )
}

export default Comment;