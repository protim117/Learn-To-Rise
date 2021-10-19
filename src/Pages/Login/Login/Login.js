
import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
  // const[redirectUrl, setRedirectUrl]=useState('');
    const{googleSignIn,signInWIthEmail,error,setError,isLoading,successful}=useAuth();

    const history=useHistory();
    const location=useLocation();
    const { register,  handleSubmit } = useForm();
    const redirectUrl=(location.state?.from.pathname ||'/home');
   
    const handleGoogleSignIn=()=>{
        googleSignIn()
      .then(()=>{
        history.push(redirectUrl);
      })
          
    }

    const onSubmit = data =>{
        signInWIthEmail(data.email,data.password)
        if(successful){
          history.push(redirectUrl);
          setError('');
            console.log(redirectUrl);
        }
        else{
          history.push('/login');
          
        }
      //  if(!isLoading){
      //      if(!error){
      //       
      //   }
      //       else{
           
      //      history.push('/login')
           
      //   }
      //  }

    };

    // useEffect(() => {
    //   successful && history.push(redirectUrl);
    // }, []);
    

    if(isLoading){
      return ( <div className="container mx-auto w-25">
      <Button className="" variant="primary" disabled>
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
    </div>);
    }

    return (
            <div className="container mx-auto w-50 mt-4 ">
           <h2 className="mb-3">Please Login</h2>
      
       <form onSubmit={handleSubmit(onSubmit)} className="register-form">
       <label htmlFor="email" className='mt-4'>Email</label>
      <input
        id="email"
        {...register("email", {required: true })}
        type="email" className='w-50'
      />
      {error }
      <label htmlFor="password" className='mt-4'>password</label>
      <input
        id="password"
        {...register("password", {required: true })}
        type="password" className='w-50'
      />
      {error} <br />
      <button type="submit" className='btn btn-warning my-5 rounded-3'>LogIn</button>
    </form>
        <p>Or? </p>
            <button onClick={handleGoogleSignIn} className='btn bg-primary text-white'> <i className="fab fa-google"></i> Google SIgn IN</button>
        <h4 className='mt-4'>Don't have an Account? <Link to='/register'>Create One</Link></h4>
        </div>
    );
};

export default Login;