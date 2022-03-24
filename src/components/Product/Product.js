import React from 'react';
import "./Product.css";

const Product = (props) => {
    const {key,name,price,img,seller} = props.product;
    return (
        <div className='product'>
            <div style={{paddingRight:"3%"}}>
                <img src={img} alt="" />
            </div>
            <div style={{width:"100%"}}>
                <h4 style={{color:"blue", fontWeight:"600"}}>{name}</h4>
                <p>by : {seller}</p>
                <p>Price : {price}</p>
                <button className='button mx-1' onClick={()=>props.handleAddToCart(props.product)}>Add to Cart</button>
                <button className='button mx-1' onClick={() => props.handleRemove(key)}> Remove</button>
            </div>
        </div>
    );
};

export default Product;