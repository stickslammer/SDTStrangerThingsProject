import React from 'react';
import { useParams } from 'react-router';

import MessageForm from './MessageForm'
import SinglePost from './SinglePost';

const ViewPost = ({ posts, token }) => {
    const { postId } = useParams();
    const post = posts.find(post => post._id === postId);
    
    return <div>
        <SinglePost post={post}>
            {post && post.messages && post.messages.map(message => <div key={message._id}>{message.fromUser.username}: {message.content} </div>)}
            <MessageForm token={token} post={post} />
        </SinglePost>
    </div>
}

export default ViewPost;