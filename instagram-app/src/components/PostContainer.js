import React from 'react';
import CommentSection from './CommentSection'

const PostContainer = props => {
    return (
        <div className='post-container'>
            <div className='post-header'>
                <img className='img-thumb' alt='' src={props.posts.thumbnailUrl}></img>
                <h4>{props.posts.username}</h4>
            </div>
            <img className='post-image' alt= '' src={props.posts.imageUrl}></img>
            <div className='comment-container'>
                <p className="comment-likes">{props.posts.likes} likes</p>
                {props.posts.comments.map(comments => (
                    <CommentSection
                        key={comments.id}    
                        comments={comments}
                    />
                ))}
                
            </div>
        </div>
    )
};



export default PostContainer;