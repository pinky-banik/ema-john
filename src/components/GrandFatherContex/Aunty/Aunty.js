import React, { useContext } from 'react';
import { RingContext } from '../GrandFatherHouse.js/GrandFatherHouse';

const Aunty = () => {
    const dress = useContext(RingContext);
    return (
        <div className='div'>
            <h2>Aunty</h2>
            <small>{dress[1]}</small>
        </div>
    );
};

export default Aunty;