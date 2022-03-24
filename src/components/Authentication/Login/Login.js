import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import Navbar from '../../Navbar/Navbar';

const Login = () => {
    const {signInUsingGoogle,signInUsingGithub} = useFirebase();
    return (
        <div>
            <Navbar></Navbar>
            <h1>Please Login</h1>
            <button onClick={signInUsingGoogle} className='button m-2'>Google Sign In</button>
            <br />
            <button onClick={signInUsingGithub} className='button m-2'>Github Sign In</button>
            <br />
            <Link to="/register">New user?</Link>
        </div>
    );
};

export default Login;