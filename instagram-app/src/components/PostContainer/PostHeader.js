import React from 'react';

const PostHeader = props => {
    return (
        <div className="post-header">
            <img className="thumbnail-img" alt='' src={props.thumbnailUrl} />
            {props.username}
        </div>
    )
}

export default PostHeader;