import React from 'react';

const SingleNews = ({singleNews}) => {
  // distructuring 
    const{img,name,details}=singleNews;
    return (
        <div className='mb-4'>
            <div className="col service-card h-100">
    <div className="card h-100">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{details}</p>
      </div>
    </div>
  </div>
        </div>
    );
};

export default SingleNews;