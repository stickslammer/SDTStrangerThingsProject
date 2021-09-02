import React from 'react';
import { useParams } from 'react-router';

import SinglePost from './SinglePost';
import MessageForm from './MessageForm';

const ViewPost = ({ posts, token }) => {
    const { postId } = useParams();
    console.log('PostId: ', postId);
    // const setPosts = posts.find(posts => posts.id === Number(postId));
    console.log('Posts: ', posts);


    return <div>
        <SinglePost posts={posts}>
            {
                posts && posts.messages && posts.messages.map(messages => <div key={messages.id}>Messages: {messages.messages}</div>)
            }
            <MessageForm messages={posts} token={token} />
        </SinglePost>
    </div>
}

export default ViewPost;


// import React from 'react';
// import { useParams } from 'react-router';
// import  MessageForm  from './MessageForm';
// import SinglePost from './SinglePost';


// const ViewPost = ({ posts, token }) => {
//     const { postId } = useParams();
//     const post = posts.find(post => post._id === postId);


//     return <div>
//         <SinglePost post={post}>
//             {
//                 post && post.messages && post.messages.map(message => <div key={message._id}>Message: {message.content}</div>)
//             }
//             <MessageForm post={post} token={token} />
//         </SinglePost>
//     </div>
// }

// export default ViewPost;