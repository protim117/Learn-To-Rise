import React from 'react';
import './Footer.css'
import logo from '../../../img/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className='footer-section p-5 mt-4'>
            <div className="row row-cols-lg-3 row-cols-1 container">
                <div className="col">
                <Link to='/'><img src={logo} style={{width:'150px'}} alt="" srcset="" /></Link>
                </div>
                {/* Footer Link . Keeped it blank */}
                <div className="col footer-extra pt-4">
                    <ul>
                        <li>Location</li>
                        <li>Testiminonial</li>
                        <li>Reccomendation</li>
                    </ul>
                </div>
                {/* Book an appoinment . Also keeped it unused  */}
                <div className="col py-5 ">
                    <button className='footer-button btn'>Book A Appoinment</button>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;