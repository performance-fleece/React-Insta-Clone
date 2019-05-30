import React from 'react';
import commentIcon from "./commentIcon.png";
import likeIcon from "./likeIcon.png";


const LikeContainer = props => {
    return (
        <div className="like-container">
            <div className="icon-container">
                <img className="comment-icon" alt="" src={commentIcon} />
                <img onClick={props.addLikes} className="comment-icon" alt="" src={likeIcon} />  
            </div>
            <div className="comment-likes">{props.likes} likes</div>
            
            </div>
            
    );
}

export default LikeContainer;