import React, { Children } from 'react';
import Cousin from '../Cousin/Cousin';

const Unti = () => {
    return (
        <div>
            <h2>Unti</h2>
            <section className='flex'>
                <Cousin>Jony</Cousin>
                <Cousin>Sharabony</Cousin>
            </section>
        </div>
    );
};

export default Unti;