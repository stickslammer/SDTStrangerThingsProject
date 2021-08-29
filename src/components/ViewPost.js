import React from 'react';
import { useParams } from 'react-router';
import  MessageForm  from './MessageForm';
import SinglePost from './SinglePost';


const ViewPost = ({ posts, token }) => {
    const { postId } = useParams();
    console.log('postId: ', postId);
    const post = posts.find(post => post._id === postId);
    console.log('post: ', post);


    return <div>
        <SinglePost post={post}>
            {
                post && post.messages && post.messages.map(message => <div key={message._id}>Message: {message.content}</div>)
            }
            <MessageForm post={post} token={token} />
        </SinglePost>
    </div>
}

export default ViewPost;