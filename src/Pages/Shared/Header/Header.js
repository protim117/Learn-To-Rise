import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../img/logo.png';
import './Header.css'

const Header = () => {
    const {user,logOut}=useAuth();

    return (

        <Navbar collapseOnSelect expand="lg" className='header-section'>
  <Container>
    <Navbar.Brand ><Link to='/'><img src={logo} style={{width:'100px'}} alt="" srcset="" /></Link></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav>
       
            <div className="me-2 d-flex align-items-center"> {user.email &&  <h5>Signed in as : {user.displayName} </h5>}  </div>
                <NavLink activeClassName="selected" activeStyle={{
                    color: "white"
                }} className='me-2 px-2 text-decoration-none nav-link' to='/home'>
                    Home
                </NavLink>
                
                <NavLink activeClassName="selected" activeStyle={{
                    color: "white"
                }} className='me-2 px-2 text-decoration-none nav-link' to='/aboutus'>
                    About Us
                </NavLink>

                <NavLink activeClassName="selected" activeStyle={{
                     color: "white"
                }} className='me-2 px-2 text-decoration-none nav-link' to='/pricing'>
                    Pricing
                </NavLink>

                {user.email? <NavLink  className='me-2 px-2 text-decoration-none nav-link' to='/home' onClick={logOut}>
                    LogOut
                </NavLink>
                :
                <NavLink activeClassName="selected" activeStyle={{
                    color: "white"
                }} className='me-2 px-2 text-decoration-none nav-link' to='/login'>
                    Login
                </NavLink>}

                <NavLink activeClassName="selected" activeStyle={{
                    color: "white"
                }} className='me-2 px-2 text-decoration-none nav-link' to='/Register'>
                    Register
                </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>



        //     <div className='header-section'>
        // <div className='d-flex justify-content-between container'>
        //     <img src={logo} style={{width:'100px'}} alt="" srcset="" />
        //     <div className='d-flex align-items-center'>
        //         <NavLink activeClassName="selected" activeStyle={{
                    
        //             color: "white"
        //         }} className='me-2 text-decoration-none nav-link' to='/home'>
        //             Home
        //         </NavLink>
                
        //         <NavLink activeClassName="selected" activeStyle={{
                 
        //             color: "white"
        //         }} className='me-2 text-decoration-none nav-link' to='/aboutus'>
        //             About Us
        //         </NavLink>

        //         <NavLink activeClassName="selected" activeStyle={{
                 
        //             color: "white"
        //         }} className='me-2 text-decoration-none nav-link' to='/appointment'>
        //             Book A Appointment
        //         </NavLink>

        //         <NavLink activeClassName="selected" activeStyle={{
                  
        //             color: "white"
        //         }} className='me-2 text-decoration-none nav-link' to='/login'>
        //             Login
        //         </NavLink>

        //         <NavLink activeClassName="selected" activeStyle={{
                 
        //             color: "white"
        //         }} className='me-2 text-decoration-none nav-link' to='/Register'>
        //             Register
        //         </NavLink>
                
        //     </div>
        // </div>
        // </div>
    );
};

export default Header;