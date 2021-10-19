import React from 'react';
import usePrice from '../../Hooks/usePrice';
import Price from './Price';

const Pricing = () => {
    const {prices}=usePrice();
    return (
        <div className="container mt-4">
            <h1 className="text-center text-success">Choose Your Best Plan</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                prices.map(price=><Price key={price.id} sprice={price}></Price>)
            }
            </div>
        </div>
    );
};

export default Pricing;