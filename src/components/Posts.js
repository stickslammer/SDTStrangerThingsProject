
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

    return <div>
        {
            posts.map(post => <SinglePost key={post._id} post={post} token={token}>
                {/* props.children */}
                <Link to={`/posts/${post._id}`}>Posts</Link>
                {
                    post.isAuthor && <button onClick={() => handleDelete(post._id)}>Delete</button>
                }
            </SinglePost>)
        }
    </div>
}


export default Posts;