import React, { useContext } from 'react';
import { RingContext } from '../GrandFather.js/GrandFatherHouse.js/GrandFatherHouse';

const Aunty = () => {
    const dress = useContext(RingContext);
    return (
        <div className='div'>
            <h2>Aunty</h2>
            <h2>{dress[1]}</h2>
        </div>
    );
};

export default Aunty;