
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
    const activeStyle={
        fontWeight:"bold",
        color:"red"
    }
    return (
        <div className='nav'>
            <img className='logo' src={logo} alt="abc" />
            <nav >
                <NavLink activeStyle={activeStyle} to="/shop">Shop</NavLink>
                <NavLink activeStyle={activeStyle} to="/orderReview">Order Review</NavLink>
                <NavLink activeStyle={activeStyle} to="/manageInventory">Manage Inventory here</NavLink>
                <NavLink activeStyle={activeStyle} to="/friends">Friends</NavLink>
                <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
                <NavLink activeStyle={activeStyle} to="/about/culture"> Culture</NavLink>
                <NavLink activeStyle={activeStyle} to="/grandFather">GrandFather</NavLink>
            </nav>
            
        </div>
    );
};

export default Navbar;