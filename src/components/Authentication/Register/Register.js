import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2>Please Register</h2>
            <form>
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;