import React from 'react';
import img from "../../images/giphy.gif"
import Navbar from '../Navbar/Navbar';
const PlaceOrder = () => {
    return (
        <div>
            <h1>Order placed suceessfully</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;