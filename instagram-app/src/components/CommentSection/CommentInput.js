import React from 'react';
import { Form, Input } from 'reactstrap';

const CommentInput = props => {
    return (
        <div className="comment-form">
            <Form>
                <Input
                type="text"
                name="addComment"
                username="defaultUser"
                placeholder="Add a comment..."
                />
            </Form>
        </div>
    )
}

export default CommentInput;