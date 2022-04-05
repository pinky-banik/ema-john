
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
    
    const activeStyle={
        fontWeight:"bold",
        color:"red"
    }
    const {user,logOut} =useAuth();
    return (
        <div className='nav '>
            <img className='logo mx-auto' src={logo} alt="abc" />
            <nav >
                <NavLink activeStyle={activeStyle} to="/shop">Shop</NavLink>
                <NavLink activeStyle={activeStyle} to="/orderReview">Order Review</NavLink>
                <NavLink activeStyle={activeStyle} to="/manageInventory">Manage Inventory here</NavLink>
                {/* <NavLink activeStyle={activeStyle} to="/addProducts">AddProduct</NavLink> */}
                {user.email && <NavLink to="/orders">Orders</NavLink>}
                {<span className='text-warning mx-3'>{user?.displayName}</span>}
                {
                    user.email?<button onClick={logOut} className='btn-primary  rounded mx-2'>log out</button>:
                    <NavLink activeStyle={activeStyle} to="/login">Login</NavLink>
                }
                
            </nav>
            
        </div>
    );
};

export default Navbar;