import React from 'react';
import './Price.css'
import SingleBenefit from './SingleBenefit';
const Price = ({sprice}) => {
    const{name,img,short,price,benefit}=sprice;
    return (
        <div className='mt-5'>
           <div className="col price-col h-100">
    <div className="card h-100 price-card ">
      <img src={img} className="card-img-top w-25 mx-auto p-4" alt="..."/>
      <div className="card-body">
        <h4 className="card-title text-center">{name}</h4>
        <article className="card-text text-center"><h6>{short}</h6>
        <h3><b>{price}</b></h3>
        <ol className="list-group list-group-numbered">
        {
            benefit.map(single=><SingleBenefit key={single} single={single}></SingleBenefit>)
        }
        </ol>
        </article>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Price;