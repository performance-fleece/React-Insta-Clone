import React from 'react';
import Comment from './Comment';
import Moment from 'react-moment';
import CommentInput from './CommentInput';
import './CommentSection.css';

const CommentSection = props => {
    return (
      <div className="comment-section">
        <div className="comment-loop">
          {props.comments.map((comment, i) => 
            <Comment key={i} username={comment.username} text={comment.text} />
          )}
        </div>
        <Moment>{props.timestamp}</Moment>
        <CommentInput />
      </div>
    );
}

export default CommentSection;