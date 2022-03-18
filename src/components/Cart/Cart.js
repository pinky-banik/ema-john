import React from 'react';
import Product from '../Product/Product';
import "./Cart.css";

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price
    }
    return (
        <div  className='cart'>
            <h3>Order Summary</h3>
            <p>Items ordered :{cart.length}</p><br/>
            <small>items :{total.toFixed(2)}</small><br/>
            <small>Shipping & Handling : {}</small><br/>
            <small>Total before tax : {}</small><br/>
            <small>Estimated tax : {}</small><br/>
            <h3 style={{color:"red"}}>Order Total : ${total.toFixed(2)}</h3>
            <button className='button' style={{width:"100%"}}>Review your order</button>
        </div>
    );
};

export default Cart;