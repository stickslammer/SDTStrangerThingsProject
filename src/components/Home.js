import React from 'react';

const Home = ({ username }) => {

    return <div>
        <h1>Welcome to Adventure Away</h1>
        {
            username ? <div>
                You are logged in as {username}
            </div> : ''
        }
    </div>
}


export default Home;

// import React from 'react';


// const Home = ({ username }) => {

//     return <div>
//         <h1>Welcome to Stranger's Things!</h1>
//         {
    
//             username ? <div>
//                 You are logged in as {username}
//             </div> : ''
//         }
//     </div>
// }


// export default Home;