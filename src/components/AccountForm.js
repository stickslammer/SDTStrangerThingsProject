import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { callApi } from '../util';

const { REACT_APP_BASE_URL } = process.env;

const AccountForm = ({ setToken, setUser, setMessages, setUserId }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');
    const params = useParams();
    const history = useHistory();

    return <div>
        <form onSubmit={async (event) => {
            event.preventDefault();
            try {

                const fetchUrl = `${REACT_APP_BASE_URL}/users/${params.method}`
                console.log('fetchUrl: ', fetchUrl);

                const loginResponse = await callApi({
                    url: `/users/${params.method}`,
                    method: 'POST',
                    body: {
                        user: {
                            username,
                            password
                        }
                    }
                });
                


                if (loginResponse.data) {

                    const userResponse = await callApi({ url: '/users/me', token: loginResponse.data.token });
                    setToken(loginResponse.data.token);
                    setUser(userResponse.data.username);
                    setMessages(userResponse.data.messages);
                    setUserId(userResponse.data._id);
                    if (loginResponse.data.token) {
                        history.push('/');
                    }
                }
            } catch (error) {
                console.error(error)
                alert("Invalid Username or Password. The information you've entered doesn't match any account. Please use the link below to register for an account.")
                setUsername('')
                setPassword('')
            }
        }}>
            <div className="container">
                <h1 className='loginheader'><div>{params.method}</div></h1>
                <br />
                <input type="text" placeholder=" username" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                <br />

                <input type="password" placeholder=" password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                <br />

                {
                    params.method === 'register' ? <input type="password" placeholder="retype your password" value={passwordMatch} onChange={(event) => setPasswordMatch(event.target.value)}></input>
                        : ''
                }

                {

                    params.method === 'register' ? <button type="submit" disabled={!password || !username || password !== passwordMatch} >Submit</button> : <button type="submit" disabled={!password || !username}>Submit</button>

                }

                {
                    params.method === 'login' ? <Link to='/account/register' className="registerhere" >Click here to register</Link> : <Link to='/account/login'>Click here to login</Link>
                }
            </div>
        </form>
    </div>
}


export default AccountForm;