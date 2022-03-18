
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <img className='logo' src={logo} alt="abc" />
            <nav >
                <Link to="/shop">Shop</Link>
                <Link to="/orderReview">Order Review</Link>
                <Link to="/Manage-inventory-here">Manage Inventory here</Link>
            </nav>
            
        </div>
    );
};

export default Navbar;