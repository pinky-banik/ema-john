import React from 'react';
import "./Friend.css";
const Friend = (props) => {
    const {name,phone,website,address}= props.friend ;
    return (
        <div className='friend'>
            <h2>I am : {name}</h2>
            <h5>call me : {phone}</h5>
            <p>visit me : {website}</p>
            <small>I live in: {address.city}</small>
        </div>
    );
};

export default Friend;