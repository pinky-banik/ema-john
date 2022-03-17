import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <img className='logo' src={logo} alt="abc" />
            <nav >
                <a href="/shop">Shop</a>
                <a href="/orderReview">Order Review</a>
                <a href="/Manage-inventory-here">Manage Inventory here</a>
            </nav>
            <form>
                <input type="text" placeholder="type here to search" />
                
                <a href="/cart"><FontAwesomeIcon icon={faShoppingCart} /><span className="badge">{5}</span></a>  
            </form>
        </div>
    );
};

export default Navbar;