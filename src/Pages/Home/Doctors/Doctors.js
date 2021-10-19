import React from 'react';
import './Doctors.css'
const Doctors = () => {
    return (
        <div className='container mt-5 pt-5'>
            <div className="row g-4">
                <div className="col-lg-4">
                    <div className="row row-cols-lg-2 row-cols-1">
                        <div className="col img-col mt-4">
                        <img src="https://i.ibb.co/6nGyRtd/1.jpg" alt="" />
                        <img src="https://i.ibb.co/VT4Ct4v/2.jpg" alt="" />
                        </div>
                        <div className="col img-col">
                        <img src="https://i.ibb.co/PtG8zX3/3.jpg" alt="" />
                        <img src="https://i.ibb.co/PrWy1bR/4.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <h5 className='text-success'>MEET OUR PSYCHOLOGIST</h5>
                    <h1 className='text-secondary'>Expert and Professional in Psychotherapy.</h1>
                    <q><b>Take your time healing, as long as you want. Nobody else knows what you’ve been through. How could they know how long it will take to heal you?</b></q>  — Abertoli
                </div>
            </div>
        </div>
    );
};





export default Doctors;