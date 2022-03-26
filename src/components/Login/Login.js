import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location =useLocation();
    const history =useHistory();
    const redirect_uri = location.state?.from || '/';
    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_uri);
        })
    }
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
            <button onClick={handleGoogleLogin} className='btn btn-primary'>Google Sign In</button>
        </div>
    );
};

export default Login;