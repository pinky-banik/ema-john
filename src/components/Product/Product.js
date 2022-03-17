import React from 'react';
import "./Product.css";

const Product = (props) => {
    const {name,price,img,seller} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 style={{color:"blue", fontWeight:"600"}}>{name}</h4>
                <p>by: {seller}</p>
                <p>Price : {price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;