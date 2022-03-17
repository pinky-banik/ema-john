import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const {cart} = props;
    return (
        <div  className='cart'>
            <h3>Order Summary</h3>
            <p>Items ordered :{}</p><br/>
            <small>items :{}</small><br/>
            <small>Shipping & Handling : {}</small><br/>
            <small>Total before tax : {}</small><br/>
            <small>Estimated tax : {}</small><br/>
            <h3 style={{color:"red"}}>Order Total : ${}</h3>
            <button className='button' style={{width:"100%"}}>Review your order</button>
        </div>
    );
};

export default Cart;