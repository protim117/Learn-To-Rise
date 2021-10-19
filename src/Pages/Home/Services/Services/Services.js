import React from 'react';
import useServices from '../../../../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const {services}=useServices();
    return (
        <div className="container mt-5 ">
        <div className="row row-cols-lg-2 row-cols-1 services gx-5">
                <div className="col service-content-col ">
                    
                    <div className='px-5 service-card-content'>
                        <h5>WHAT WE DO</h5>
                        <h1>The best counseling from the best psychologists.</h1>
                        <h4>See our services. Click the Button to see details.</h4>
                    </div>
                </div>
                <div className="col service-col ">
                    {/* Showing All the Services  */}
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        services?.map(service=> <Service key={service.id} service={service}></Service>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;