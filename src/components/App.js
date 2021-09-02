import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import {
    AccountForm,
    NewPost,
    Home,
    Posts,
    ViewPost
} from './index';

import { callApi } from '../util';

const { REACT_APP_BASE_URL } = process.env;

const App = () => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    console.log('User: ', user);

    const [posts, setPosts] = useState([]);
    console.log('Posts: ', posts);


    const fetchPosts = async () => {
        const respObj = await callApi({
            url: `/posts`,
            token
        });
        const posts = respObj.data.posts;
        if (posts) setPosts(posts);
        console.log("Posts: ", posts);
    }

    useEffect(() => {
        try {
            fetchPosts();
        } catch (error) {
            console.error(error);
        }
    }, [token]);

    return <div>
        <Link to="/">Home</Link> |
        <Link to="/users/login">Login</Link> |
        <Link to="/posts">Posts</Link> |
        <Route exact path="/">
            <Home username={user.username} />
        </Route>
        <Route exact path="/posts">
            <NewPost token={token} setPosts={setPosts} />
            <Posts posts={posts} token={token} fetchPosts={fetchPosts} />
        </Route>
        <Route exact path="/posts/:postId">
            <ViewPost posts={posts} token={token} />
        </Route>
        <Route exact path="/account/:method">
            <AccountForm setToken={setToken} setUser={setUser} />
        </Route>
    </div>
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { Route, Link } from 'react-router-dom';

// import {
//     AccountForm,
//     NewPost,
//     Posts,
//     ViewPost,
//     Home

// } from './index';

// import { callApi } from '../util';
// import { render } from 'react-dom';

// // const { REACT_APP_BASE_URL } = process.env;

// const App = () => {
//     const [token, setToken] = useState('');
//     const [posts, setPosts] = useState([]);
//     const [user, setUser] = useState('');
    


//     const fetchPosts = async () => {
//         const respObj = await callApi({
//             url: `/posts`,
//             token
//         });
//         console.log("FetchPosts: ", respObj);
//         const myPostResponse = respObj.data.post;
//         if (myPostResponse) setPosts(myPostResponse);;
//     }

//     useEffect(() => {
//         try {
//             fetchPosts();
//         } catch (error) {
//             console.error(error);
//         }
        
//     }, [token]);
//     fetchPosts();

//         return <div>
//             <Link to="/">Home</Link> |
//             <Link to="/account/login">Login</Link> |
//             <Link to="/account/register">Register</Link>
//             <Route exact path="/">
//                 <Home username={user.username} />
//             </Route>
//             <Route exact path="/posts">
//                 <NewPost token={token} setPosts={setPosts} />
//                 <Posts post={posts} token={token} fetchPosts={fetchPosts} />
//             </Route>
//             <Route exact path="/posts/:postId">
//                 <ViewPost post={posts} token={token} />
//             </Route>
//             <Route exact path="/account/:method">
//                 <AccountForm setToken={setToken} setUser={setUser} token={token} />
//             </Route>
      
//         </div>
//     }

// export default App;