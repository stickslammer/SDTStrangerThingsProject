import React, { useState } from 'react';
import { callApi } from '../util';
import { useHistory } from 'react-router';

const MessageForm = ({ post, token }) => {
    const [content, setContent] = useState('');
    const history = useHistory()
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const url = `/posts/${post._id}/messages`;
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
        history.push('./')
    }
    return <div>
        {
            token && !post.isAuthor ?
                <form className="addmessage" onSubmit={handleSubmit}>
                    <label>Compose Message:</label>
                    <input className="addmessagelabel" value={content} placeholder="content" onChange={(ev) => setContent(ev.target.value)}></input>
                    <button type="submit">Send Message</button>
                </form> : ''

        }

    </div>
}

export default MessageForm;