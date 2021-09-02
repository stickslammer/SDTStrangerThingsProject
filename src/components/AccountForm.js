import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router';

import { callApi } from '../util';

const { REACT_APP_BASE_URL } = process.env;

const AccountForm = ({ setToken, setGuest }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const params = useParams();
    const history = useHistory();

    return <div>
        <h1>Login/Register</h1>
        <div>This is the {params.method} method</div>
        <form onSubmit={async (event) => {
            event.preventDefault();
            // we need to send a fetch request, so we can get the token
            // in order to get a token, the server wants... username and password

            const loginResp = await callApi({
                url: `/guests/${params.method}`,
                method: 'POST',
                body: {
                    guest: {
                        username,
                        password
                    }
                }
            });

            if (loginResp.data) {
                // if we got back a token, get the user data
                const guestResp = await callApi({ url: '/guests/me', token: loginResp.data.token });
                setToken(loginResp.data.token);
                setGuest(guestResp.data.guest);
                if (loginResp.data.token) {
                    history.push('/');
                }
            }
        }}>
            <input type="text" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)}></input>
            <hr></hr>
            <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
            <hr></hr>
            {
                params.method === 'register' ? <div>SECOND PASSWORD INPUT WOULD GO HERE</div> : ''
            }
            <button type="submit" disabled={!password || !username}>Submit</button>
        </form>
    </div>
}


export default AccountForm;

// import React, { useState } from 'react';
// import { useParams, useHistory } from 'react-router';
// import { Link } from 'react-router-dom'
// import { callApi } from '../util';

// const { REACT_APP_BASE_URL } = process.env;

// const AccountForm = ({ setToken, setUser, setMessages, setUserId }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const params = useParams();
//     const history = useHistory();

//     return <div>
//         <h1>Login/Register</h1>
//         <div>This is the {params.method} method</div>
//         <form onSubmit={async (event) => {
//             event.preventDefault();
//             const fetchUrl = `${REACT_APP_BASE_URL}/users/${params.method}`;
//             console.log('FetchAPI: ', fetchUrl);
//             const loginResp = await callApi({
//                 url: `/post/${params.method}`,
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     user: {
//                         username,
//                         password
//                     }
//                 })
//             });

//             if (loginResp.data) {
//                 const userResp = await callApi({ url: '/users/me', token: loginResp.data.token });
//                 setToken(loginResp.data.token);
//                 setUser(userResp.data.user);
//                 setMessages(userResp.data.messages);
//                 setUserId(userResp.data._id);
//                 if (loginResp.data.token) {
//                     history.push('/');
//                 }
//             }
//         }}>
//             <input type="text" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)}></input>
//             <hr></hr>
//             <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
//             <hr></hr>
//             {
//                 params.method === 'register' ? <div></div> : ''
//             }
//             <button type="submit" disabled={!password || !username}>Submit</button>
//         </form>
//         {params.method === 'login' ? <Link to='/account/register'>Click here to register</Link> : <Link to='/account/login'>Click here to login</Link>}
//     </div>
// }


// export default AccountForm;