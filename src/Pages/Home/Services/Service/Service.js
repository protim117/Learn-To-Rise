import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{id,name,description,img}=service;
    
    return (
        <div>
           <div className="col h-100 service-card">
    <div className="card h-100">
      <img src={img} className="card-img-top h-50" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description.slice(0,100)}</p>
      </div>
      <div className="card-body text-center">
        {/* Added Dynamic Link  */}
         <Link to={`/services/${id}`}> <button className='button' >See Details<i className="fas fa-arrow-circle-right ps-2"></i></button></Link>
          </div>
    </div>
  </div>
        </div>
    );
};

export default Service;