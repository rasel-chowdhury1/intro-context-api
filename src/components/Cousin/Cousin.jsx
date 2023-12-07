import React from 'react';
import Children from '../Children/Children';

const Cousin = ({children}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{children}</p>
            {
                children ==="Sharabony" && <Children></Children>
            }
        </div>
    );
};

export default Cousin;