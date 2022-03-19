import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Friend.css";
const Friend = (props) => {
    const {id,name,phone,website,address}= props.friend ;
    const history = useHistory();
    const Url = `/friend/${id}`
    const handleFriendClick=()=>{
        history.push(Url);
    }


    return (
        <div className='friend'>
            <h2>I am : {name} : {id}</h2>
            <h5>call me : {phone}</h5>
            <p>visit me : {website}</p>
            <small>I live in: {address.city}</small><br></br>
            <Link to={Url}>Visit me</Link><br />
            <button onClick={handleFriendClick}>visit me </button>
        </div>
    );
};

export default Friend;