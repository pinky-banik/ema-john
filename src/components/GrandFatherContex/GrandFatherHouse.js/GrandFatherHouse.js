import React, { createContext, useState } from 'react';
import GrandFather from '../GrandFather.js/GrandFather';


export const RingContext = createContext('ring');
const GrandFatherHouse = () => {
    const [house,setHouse]= useState(1);
    const ornaments = 'diamond ring';
    const dress ="Designer dress"
    return (
        <RingContext.Provider value={[ornaments,dress]}>
            <div>
            <button onClick={()=> setHouse(house+1)}>Buy a new house</button>
            <GrandFather house={house}></GrandFather>
        </div>
        </RingContext.Provider>
    );
};

export default GrandFatherHouse;