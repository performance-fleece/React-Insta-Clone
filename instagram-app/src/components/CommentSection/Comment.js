import React from 'react';
import PropTypes from 'prop-types';


const Comment = props => {
    return (
        <div className="comment-container">
            <p className="comment-user">{props.username}</p>
            <p className="comment-text">{props.text}</p>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;