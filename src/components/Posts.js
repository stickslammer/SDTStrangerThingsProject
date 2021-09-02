import React from 'react';
import { callApi } from '../util';
import { Link } from 'react-router-dom';

import {
    SinglePost,
} from './';

const Posts = ({ posts, token, fetchPosts }) => {

    const handleDelete = async (postId) => {
        const respObj = await callApi({
            method: 'DELETE',
            url: `/posts/${postId}`,
            token
        });
        console.log('respObj: ', respObj);
        await fetchPosts();
    }
    // if... isCreator is true... then show delete
    console.log("These are the posts: ", posts)
    // {
    //     posts.map(posts => <SinglePost key={posts.id} posts={posts} token={token}>
    //         {/* props.children */}
    //         <Link to={`/posts/${posts.id}`}>Details</Link>
    //         {
    //             posts.isCreator && <button onClick={() => handleDelete(posts.id)}>Delete</button>
    //         }
    //     </SinglePost>)
    // }
    
    return (
        <div>
            {
                posts.map((post) => (
                    <div>{ post.description}</div>
                )) 
            }

        
        </div>
    )
}


export default Posts;


// import React from 'react';
// import { callApi } from '../util';
// import { Link } from 'react-router-dom';

// import {
//     SinglePost,
// } from './';

// const Posts = ({ posts, token, fetchPosts }) => {

//     const handleDelete = async (postId) => {
//         const respObj = await callApi({
//             method: 'DELETE',
//             url: `/posts/${postId}`,
//             token
//         });
//         console.log('RespObj: ', respObj);
//         await fetchPosts();
//     }

//     return <div>

//         {
//             posts.map(post => <div key={post._id}>
//                 <h3>{post.title}</h3>
//                 <div>{post.description}</div>
//                 <div>Price: {post.price}</div>
//                 <div>Seller: {post.author.username}</div>
//                 <div>Location: {post.location}</div>
//             </div>)
//         }
//     </div>
// }


// export default Posts;