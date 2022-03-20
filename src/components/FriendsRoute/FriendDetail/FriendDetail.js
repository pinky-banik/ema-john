import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const FriendDetail = () => {
    const {friendId} = useParams();
    const[friend,setFriend]=useState([]);
    const {name,username,adress,website ,email}=friend;
    const history = useHistory();

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[]);
    
    const handleGoToFriend=()=>{
        history.push('/friends')
    }
    return (
        <div>
            <h1>frieend id is {friendId}</h1>
            <h1>Friend detail is coming {name};</h1>
            <h1>username:{username}</h1>
            <h3>adress: {adress?.city}</h3>
            <h3>website {website}</h3>
            <h5>email: {email}</h5>
            <button onClick={handleGoToFriend}>See All Friends</button>
        </div>
    );
};

export default FriendDetail;