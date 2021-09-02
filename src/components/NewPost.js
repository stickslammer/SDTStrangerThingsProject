import React, { useState } from 'react';
import { callApi } from '../util';

const AddVacation = ({ token, setVacations }) => {
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const handleAdd = async (ev) => {
        ev.preventDefault();
        console.log({ location, description });
        const vacationResp = await callApi({
            url: '/vacations',
            method: 'POST',
            token,
            body: {
                vacation: {
                    location,
                    description
                }
            }
        });
        console.log('vacationResp: ', vacationResp);
        // fetch the vacations again, adding our token
        const vacationsResp = await callApi({ url: '/vacations', token });
        console.log('vacationsResp: ', vacationsResp);
        // set the vacations on state
        setVacations(vacationsResp.data.vacations);
    }

    return <div>
        <h1>Add Vacation</h1>
        <form onSubmit={handleAdd}>
            <input type="text" placeholder="location" value={location} onChange={(event) => setLocation(event.target.value)}></input>
            <input type="text" placeholder="description" value={description} onChange={(event) => setDescription(event.target.value)}></input>
            <button type="submit">Add Vacation</button>
        </form>
    </div>
}


export default AddVacation;

// import React, { useState } from 'react';

// const { REACT_APP_BASE_URL} = process.env;

// const NewPost = ({ token }) => {
//     const [title, setTitle] = useState('')
//     const [description, setDescription] = useState('')
//     const [location, setLocation] = useState('')
//     const [willDeliver, setWillDeliver] = useState(false)
//     const [price, setPrice] = useState('')
//     return <div>
//         <h1>Create a Post</h1>
    
//         <form onSubmit={async (event) => {
//             event.preventDefault();

//             fetch(`${REACT_APP_BASE_URL}/posts`, {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`

//                 },
//                 body: JSON.stringify({
//                     post: {
//                         title,
//                         description,
//                         price,
//                         location,
//                         willDeliver
//                     }
//                 })
//             }).then(response => response.json())
//                 .then(result => {
//                     console.log(result);
//                 })
//                 .catch(console.error);
//         }}>
//             <fieldset>
//                 <label>Title</label>
//                 <input type="text" placeholder="Write your title here" value={title} onChange={(event) => setTitle(event.target.value)}></input>
//             </fieldset>

//             <fieldset>
//                 <label>Description</label>
//                 <input type="text" placeholder="Write your description here" value={description} onChange={(event) => setDescription(event.target.value)}></input>
//             </fieldset>

//             <fieldset>
//                 <label>Price</label>
//                 <input type="text" placeholder="Enter your price here" value={price} onChange={(event) => setPrice(event.target.value)}></input>
//             </fieldset>

//             <fieldset>
//                 <label>Location</label>
//                 <input type="text" placeholder="Enter your location here" value={location} onChange={(event) => setLocation(event.target.value)}></input>
//             </fieldset>
//             <fieldset>
//                 <label>Will Deliver</label>
//                 <select type="text" placeholder="Will you deliver the item" value={willDeliver} onChange={(event) => setWillDeliver(event.target.value)}>
//                     <option value="false">No</option>
//                     <option value="true">Yes</option>
//                     </select>
//             </fieldset>

//             <button type="submit">Post</button>
//         </form>
//     </div>
// }

// export default NewPost;