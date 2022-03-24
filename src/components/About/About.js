import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>This is about</h1>
            <Link to="/about/culture"><h2>Culture</h2></Link>
        </div>
    );
};

export default About;