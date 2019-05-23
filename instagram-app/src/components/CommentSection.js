import React from 'react'

const CommentSection = props => {
    return (
        <div className="comment-wrapper">
        <p className="comment-user">{props.comments.username}</p>
        <p className="comment-text">{props.comments.text}</p>
        </div>
    )
}

export default CommentSection;