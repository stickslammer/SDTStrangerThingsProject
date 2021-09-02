import React, { useState } from 'react';
import { callApi } from '../util';

const MessageForm = ({ messages, token }) => {
    const [content, setContent] = useState('');
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const url = `/messages/${messages.id}/message`;
        const data = await callApi({
            method: 'POST',
            url,
            token,
            body: {
                comment: {
                    content
                }
            }
        });
        // fetch vacations again
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <input value={content} placeholder="content" onChange={(ev) => setContent(ev.target.value)}></input>
            <button type="submit">Add Comment to Vacation</button>
        </form>
    </div>
}

export default MessageForm;

// import React, { useState } from 'react';
// import { useHistory } from 'react-router';
// import { callApi } from '../util';

// const MessageForm = ({ post, token }) => {
//     const [content, setContent] = useState('');
//     const history = useHistory();
//     const handleSubmit = async (ev) => {
//         ev.preventDefault();
//         const url = `/posts/${post._id}/messages`;
//         const data = await callApi({
//             method: 'POST',
//             url,
//             token,
//             body: {
//                 message: {
//                     content
//                 }
//             }
//         });
      
//         // history.push("./")
//         // fetch posts again
//     }
//     return <div>
//         <form onSubmit={handleSubmit}>
//             <input value={content} placeholder="content" onChange={(ev) => setContent(ev.target.value)}></input>
//             <button type="submit">Add Comment to Post</button>
//         </form> 
//     </div>
// }

// export default MessageForm;