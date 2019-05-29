import React from 'react';
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from './PostHeader';
import LikeContainer from './LikeContainer';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.posts.likes
        };
    }


    render() {
        return (
            <div className="post-wrapper">
                <PostHeader 
                thumbnailUrl={props.posts.thumbnailUrl}
                username={props.posts.username}
                imageUrl={props.posts.imageUrl}
                />
                <LikeContainer likes={this.state.likes} />
                <CommentSection comments={props.posts.comments} />
            </div>

        );
    }



}

export default Posts;

