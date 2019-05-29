import React from 'react';

const CommentForm = props => {
    return (
        <form name="commentAdd" onsubmit={props.addComment}>
            <input 
            type="text" 
            value={props.comment} 
            placeholder="Add a comment..."
            name="comment"
            onChange={props.changeHandler} />

        </form>    
    );
}

export default CommentForm;