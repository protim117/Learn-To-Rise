import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='container text-center'>
            <div className=" not-found ">
                <img src="https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png" alt="" />
           <div className='text-center'> <Link to='/home' className=''><button className='btn not-found-btn  '>Back to Home</button></Link></div>
            </div>
        </div>
    );
};

export default NotFound;