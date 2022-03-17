import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
   const [products,setProducts]=useState([]);
    
   useEffect(()=>{
       fetch('./products.JSON')
       .then(res=> res.json())
       .then(data=> setProducts(data))
   },[]);

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product=><Product
                    key={product.key}
                    product={product}
                    >
                    </Product>)
                }
            </div>
            <div>
                <cart></cart>
            </div>
        </div>
    );
};

export default Shop;