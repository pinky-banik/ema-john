import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
import { addToDb, deleteFromDb } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
   const [products,setProducts]=useState([]);
   const [cart,setCart] = useState([]);

    
   useEffect(()=>{
       fetch('./products.JSON')
       .then(res=> res.json())
       .then(data=> setProducts(data))
   },[]);

   useEffect(()=>{
       const savedCart = getStoredCart();
       const storedCart =[];
       if (products.length){
           for (const key in savedCart){
           const addedProduct = products.find(product=>product.key===key);
           if(addedProduct){
               const quantity = savedCart[key];
               addedProduct.quantity = quantity;
               console.log(addedProduct);
            storedCart.push(addedProduct);
           }
           
           }
           setCart(storedCart);
       }
       else{

       }
   },[products]);

    const handleAddToCart =(product) =>{
       const newcart = [...cart, product];
       setCart(newcart);
       addToDb(product.key);
    }
    const handleRemove =id =>{
        deleteFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product=><Product
                    key={product.key}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    handleRemove = {handleRemove}
                    >
                    </Product>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;