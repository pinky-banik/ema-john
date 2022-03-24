
import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
    const activeStyle={
        fontWeight:"bold",
        color:"red"
    }
    const {user,logout} =useFirebase();
    return (
        <div className='nav '>
            <img className='logo mx-auto' src={logo} alt="abc" />
            <nav >
                <NavLink activeStyle={activeStyle} to="/shop">Shop</NavLink>
                <NavLink activeStyle={activeStyle} to="/orderReview">Order Review</NavLink>
                <NavLink activeStyle={activeStyle} to="/manageInventory">Manage Inventory here</NavLink>
                
                <NavLink activeStyle={activeStyle} to="/login">Login</NavLink>
                <NavLink activeStyle={activeStyle} to="/register">Register</NavLink>
                <span className='text-warning mx-2 fw-bold'>{user.displayName}</span>
                {user?.displayName && <button className='btn-primary  rounded mx-2' onClick={logout}>log out</button>}
            </nav>
            
        </div>
    );
};

export default Navbar;