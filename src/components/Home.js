import React from 'react';

const Home = ({ user, token, messages, userId }) => {
    return <div>
        <h1 className="welcome">Welcome to Stranger's Things</h1>
        {token ? <div className="welcomeuser">
            You are logged in as {user}
        </div> : ''}
    </div>
}
export default Home;