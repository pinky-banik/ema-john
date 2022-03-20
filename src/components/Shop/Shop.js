import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { getStoredCart } from '../../utilities/fakedb';
import { addToDb, deleteFromDb } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
import { Link } from 'react-router-dom';
const Shop = () => {
   const [products,setProducts]=useState([]);
   const [cart,setCart] = useState([]);
   const [displayProducts,setDisplayProducts]= useState([]);


    
   useEffect(()=>{
       fetch('./products.JSON')
       .then(res=> res.json())
       .then(data=> {
        setProducts(data)
        setDisplayProducts(data);
       });   
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
            storedCart.push(addedProduct);
           }
           
           }
           setCart(storedCart);
       }
       else{

       }
   },[products]);

 
    const handleAddToCart =(product) =>{
        const exists= cart.find(cartProduct=>cartProduct.key===product.key);
        let newCart =[];
        if(exists){
            const rest= cart.filter(cartProduct=>cartProduct.key!==product.key);
            exists.quantity=(exists.quantity+1);
            newCart=[...rest,product];
        }
        else{
            product.quantity=1;
            newCart=[...cart,product];
        }
       setCart(newCart);
       addToDb(product.key);
    }
    const handleRemove =id =>{
        deleteFromDb(id);
    }
    const handleSearch = event =>{
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        product.quantity = !product.quantity?1 : product.quantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity+ product.quantity;
    }
    return (
        <div>
            <div className='search_container'>
            <form>
                <input  type="text"
                onChange={handleSearch}
                 placeholder="type here to search" />
                              <Link to="/orderReview"><FontAwesomeIcon icon={faShoppingCart} /><span className="badge">{totalQuantity}</span></Link>  
            </form>
            </div>
            <div className='shop-container'>
            <div className='product-container'>
                {
                    displayProducts.map(product=><Product
                    key={product.key}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    handleRemove = {handleRemove}
                    >
                    </Product>)
                }
            </div>
            <div>
                <Cart cart={cart}
                      totalQuantity={totalQuantity}
                >
                    <Link to="/review">
                    <button className='button' style={{width:"100%"}}>Review your Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;