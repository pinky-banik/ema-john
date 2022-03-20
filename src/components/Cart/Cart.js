import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const {cart} = props;

    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        product.quantity = !product.quantity?1 : product.quantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity+ product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;
    return (
        <div  className='cart'>
            <h3>Order Summary</h3>
            <p>Items ordered :{totalQuantity}</p><br/>
            <small>items :{cart.length.toFixed(2)}</small><br/>
            <small>Shipping & Handling : {}</small><br/>
            <small>Total before tax : {}</small><br/>
            <small>Estimated tax : {}</small><br/>
            <h3 style={{color:"red"}}>Order Total : ${grandTotal.toFixed(2)}</h3>
            {
                props.children
            }
        </div>
    );
};

export default Cart;