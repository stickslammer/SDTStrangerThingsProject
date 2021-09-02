import React, { useState } from 'react';
import { callApi } from '../util';

const NewPost = ({ token, setPosts }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false)


    const handleAdd = async (ev) => {
        ev.preventDefault();
        const postResponse = await callApi({
            url: '/posts',
            method: 'POST',
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
    }

    return <div>
        <div className="newpost">
            <h1>Add Post</h1>
            <form onSubmit={handleAdd}>

                <fieldset>
                    <label className="addformlabel">Title: </label>
                    <input type="text" placeholder=" title" value={title} onChange={(event) => setTitle(event.target.value)}></input>
                </fieldset>

                <fieldset>
                    <label className="addformlabel">Description: </label>
                    <input type="text" placeholder=" description" value={description} onChange={(event) => setDescription(event.target.value)}></input>
                </fieldset>

                <fieldset>
                    <label className="addformlabel">Price: </label>
                    <input type="text" placeholder=" price" value={price} onChange={(event) => setPrice(event.target.value)}></input>
                </fieldset>

                <fieldset>
                    <label className="addformlabel">Location: </label>
                    <input type="text" placeholder=" location" value={location} onChange={(event) => setLocation(event.target.value)}></input>
                </fieldset>

                <fieldset>
                    <label className="addformlabel">Will Deliver: </label>
                    <select type="text" value={willDeliver} onChange={(event) => setWillDeliver(event.target.value)}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </fieldset>
                <button type="submit">Add post</button>
            </form>
        </div>
    </div>
}


export default NewPost;