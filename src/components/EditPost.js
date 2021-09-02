import React, { useState } from 'react';
import { callApi } from '../util';
import { useParams, useHistory } from 'react-router';

import SinglePost from './SinglePost';

const EditPost = ({ token, setPosts, posts }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false)

    const { postId } = useParams();
    const history = useHistory();

    const post = posts.find(post => post._id === postId);

    const handleAdd = async (ev) => {
        ev.preventDefault();
        const postResponse = await callApi({
            url: `/posts/${postId}`,
            method: 'PATCH',
            token,
            body: {
                post: {
                    title,
                    description,
                    price,
                    location,
                    willDeliver
                }
            }
        });

        const postsResponse = await callApi({ url: '/posts', token });

        setPosts(postsResponse.data.posts);
        history.push('/posts')
    }

    return <div>
        <SinglePost post={post} />
        <div className="editform">
            <h1>Edit Post</h1>

            <form onSubmit={handleAdd}>

                <fieldset>
                    <label className="editformlabel">Title: </label>
                    <input type="text" placeholder={`${post && post.title}`} value={title} onChange={(event) => setTitle(event.target.value)}></input>
                </fieldset>

                <fieldset>
                    <label className="editformlabel">Description: </label>
                    <input type="text" placeholder={`${post && post.description}`} value={description} onChange={(event) => setDescription(event.target.value)}></input>
                </fieldset>

                <fieldset>
                    <label className="editformlabel">Price: </label>
                    <input type="text" placeholder={`${post && post.price}`} value={price} onChange={(event) => setPrice(event.target.value)}></input>
                </fieldset>

                <fieldset>
                    <label className="editformlabel">Location: </label>
                    <input type="text" placeholder={`${post && post.location}`} value={location} onChange={(event) => setLocation(event.target.value)}></input>
                </fieldset>

                <fieldset>
                    <label className="editformlabel">Will Deliver: </label>
                    <select type="text" placeholder={`${post && post.willDeliver}`} value={willDeliver} onChange={(event) => setWillDeliver(event.target.value)}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </fieldset>
                <button type="submit">Add post</button>
            </form>
        </div>
    </div>
}

export default EditPost;