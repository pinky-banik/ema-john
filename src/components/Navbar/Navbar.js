
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
            
        </div>
    );
};

export default Navbar;