import React, { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

import "./GrandFather.css";
const GrandFather = (props) => {
    const {house,ornaments}=props;
    return (
        <div className='div' >
            <h2>GrandFather
            </h2>
            <h3>House : {house}</h3>
            <div className='div' style={{display:'flex'}}>
            <Father house={house} ornaments={ornaments}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
            </div>
        </div>
    );
};

export default GrandFather;