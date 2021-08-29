import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import {
    AccountForm,
    NewPost,
    Posts,
    ViewPost,
    Home

} from './index';

import { callApi } from '../util';

// const { REACT_APP_BASE_URL } = process.env;

const App = () => {
    const [token, setToken] = useState('');
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState('');
    const [messages, setMessages] = useState([]);

    console.log('posts: ', posts);
    console.log('user: ', user);
    console.log('userId: ', userId);
    console.log('messages: ', messages);

    const fetchPosts = async () => {
        const respObj = await callApi({
            url: `/posts`,
            token
        });
        const myPostResponse= respObj.data.post;
        if (myPostResponse) setPosts(myPostResponse);
    }

    useEffect(() => {
        try {
            fetchPosts();
        } catch (error) {
            console.error(error);
        }
    }, [token]);

    return <div>
        <Link to="/account/login">Login</Link> |
        <Link to="/post">Posts</Link> |
        <Route exact path="/">
            <Home user={user} token={token} messages={messages} userId={userId} />
        </Route>
        <Route exact path="/posts">
            {token ? <NewPost token={token} setPosts={setPosts} /> : null}
            <Posts posts={posts} token={token} fetchPosts={fetchPosts} />
        </Route>
        <Route exact path="/post/:postId">
            <ViewPost post={posts} token={token} />
        </Route>
        <Route exact path="/account/:method">
            <AccountForm setToken={setToken} setMessages={setMessages} setUserId={setUserId} setUser={setUser}/>
        </Route>
    </div>
}

export default App;