import React, { createContext, useState } from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Unti from '../Unti/Unti';

export const RingContext = createContext('gold')
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = "diamond";
    const [money,setMoney] = useState(0)

    return (
        <div className='grandpa'>
            <h3>this is grandpa section</h3>
            <p>Price: {money}</p>
            <MoneyContext.Provider value={[money,setMoney]}>
                <RingContext.Provider value='golder Ring'>
                    <section className='flex'>
                        <Father have={ring}></Father>
                        <Uncle></Uncle>
                        <Unti></Unti>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
            
        </div>
    );
};

export default Grandpa;