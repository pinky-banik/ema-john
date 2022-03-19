import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import Navbar from '../Navbar/Navbar';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] =useProducts();
    const [cart] = useCart(products);
    const handleRemove =(id)=>{
        console.log(id);
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product=><ReviewItem
                    key={product.key}
                    product={product}
                    handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
            <Cart cart={cart}></Cart>
            </div>
            </div>
            
        </div>
    );
};

export default OrderReview;