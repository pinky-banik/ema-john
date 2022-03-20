import React, { useContext } from 'react';
import { RingContext } from '../GrandFather.js/GrandFatherHouse.js/GrandFatherHouse';

const Special = () => {
    const abc =useContext(RingContext);
    return (
        <div className='div'>
            <h2>Special</h2>
            <small>{abc}</small>
        </div>
    );
};

export default Special;