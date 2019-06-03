import React from 'react';
import like from '../assets/likeIcon.png';
import comment from '../assets/commentIcon.png';

const LikeContainer = props => {
    return (
        <div className="like-wrapper">
            <div className="like-icons">
                <img alt='' src={like} />
                <img alt='' src={comment} />
            </div>
            {props.likes} likes
        </div>
    );
};

export default LikeContainer;