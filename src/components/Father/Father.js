import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = (props) => {
    const{house,ornaments} = props;
    return (
        <div className='div' >
            <h2>Father
            </h2>
            <h3> House :{house}
            </h3>
            <div style={{display:"flex"}}>
            <Brother house={house}></Brother>
            <MySelf house={house} ornaments={ornaments}></MySelf>
            <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;