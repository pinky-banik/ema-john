import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <form action="">
                <input type="email" name="" id="" placeholder='Email'/>
                <br />
                <input type="password" name="" id="" placeholder='Password'/>
                <br />
                <input  type="submit" value="submit" placeholder='Re-Enter Password'/>
            </form>
            <p>new to ema-john? <Link to="/register">Create Account</Link> </p>
            <div>-------------------------------------------------</div>
            <button onClick={signInUsingGoogle} className='btn btn-primary'>Google Sign In</button>
        </div>
    );
};

export default Login;