import React from 'react';
import Special from '../Special/Special';

const Myself = ({have}) => {
    return (
        <div>
            <h2>Myself</h2>
            <Special have={have}></Special>
        </div>
    );
};

export default Myself;