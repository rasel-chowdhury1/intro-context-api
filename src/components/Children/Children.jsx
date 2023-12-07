import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Children = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>Children</h2>
            <p>context value: {ring}</p>
        </div>
    );
};

export default Children;