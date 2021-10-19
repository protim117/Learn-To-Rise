import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import useServices from '../../../../Hooks/useServices';



const ServiceDetails = () => {
    const {serviceId}=useParams();
    const {services}=useServices();
const[singleService,setSingleService]=useState([])
    
    useEffect(()=>{
        const specificService=services?.find(service=>service.id.toString()===serviceId);
        setSingleService(specificService);
    },[services]);

    console.log(singleService);
 
  
    return (
        <div className='container mt-4'>
            <div className="row row-cols-lg-2 row-cols-1 g-5">
                <div className="col p-5">
                    
                    <h1 className='text-center mb-3 text-success'><u>{singleService?.name}</u></h1>
                    <h4 className='text-center'>{singleService?.description}</h4>
                     
                </div>
                <div className="col">
                    <img src={singleService?.img} className="w-100 pt-3" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default ServiceDetails;