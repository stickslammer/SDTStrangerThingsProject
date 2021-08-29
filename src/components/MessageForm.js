import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { callApi } from '../util';

const MessageForm = ({ post, token }) => {
    const [content, setContent] = useState('');
    const history = useHistory();
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const url = `/post/${post._id}/messages`;
        const data = await callApi({
            method: 'POST',
            url,
            token,
            body: {
                message: {
                    content
                }
            }
        });
        console.log('data: ', data);
        history.push("./")
        // fetch posts again
    }
    return <div>
        token && !post.isAuthor ? 
        <form onSubmit={handleSubmit}>
            <input value={content} placeholder="content" onChange={(ev) => setContent(ev.target.value)}></input>
            <button type="submit">Add Comment to Post</button>
        </form> : ''
    </div>
}

export default MessageForm;