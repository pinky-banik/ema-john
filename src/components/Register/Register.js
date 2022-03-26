import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email" name="" id=""
                placeholder='Email' />
                <br />
                <input type="password" 
                placeholder='password' />
                <br />
                <input type="password" 
                placeholder='Re-Enter Password' />
                <br />
                <input className='bg-primary rounded' type="submit" value="submit" />
            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;