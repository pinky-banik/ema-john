import React from 'react';

const ReviewItem = (props) => {
    const {name,price,quantity,img,key} =props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h3 className='text-primary'>name: {name}</h3>
            <h2>price: {price}</h2>
            <h3>quantity: {quantity}</h3>
            <button onClick={()=>props.handleRemove(key)} className='button'>remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;