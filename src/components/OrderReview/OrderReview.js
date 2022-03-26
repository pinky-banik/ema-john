import React from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] =useProducts();
    const [cart,setCart] = useCart(products);
    const history = useHistory();
    const handleRemove =(key)=>{
        const newCart =cart.filter(product=>product.key!==key);
        setCart(newCart);
        deleteFromDb(key);
    }
    const handlePlaceOrder =()=>{
        
        // setCart([]);
        // clearTheCart();
        history.push("/shipping");
    }

    return (
        <div>
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
            <Cart cart={cart}>
                <button onClick={handlePlaceOrder} className='button w-100'>Proceed to Order</button>
            </Cart>

            </div>
            </div>
            
        </div>
    );
};

export default OrderReview;