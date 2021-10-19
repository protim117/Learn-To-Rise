import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Register.css'


const Register = () => {
  const{signUpWithEmail,error,googleSignIn,user}=useAuth();
  const { register,  handleSubmit } = useForm();
  const history=useHistory();
  const location=useLocation();
  const redirectUrl=location.state?.from||'/home'
  const handleGoogleSignIn=()=>{
    googleSignIn()
    .then(()=>{
        history.push(redirectUrl);
    })
}
  
  
  const onSubmit = data =>{signUpWithEmail(data.email,data.password,data.name)
    history.push(redirectUrl);
  };

    return (
        <div className="container mx-auto w-50 mt-4 ">
           <h2 className="mb-3">Please Register</h2>
      
      {
        user.email? <h3 className='text-danger'>Looks Like you already logged in. LogOut first to create a new account</h3>
        : <div> <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <label htmlFor="name">Name</label>
        <input {...register("name", { required: true })} className='w-50' />
 
       <label htmlFor="email" className='mt-4'>Email</label>
       <input
         id="email"
         {...register("email", {
           required: "required",
           pattern: {
             value: /\S+@\S+\.\S+/,
             message: "Entered value does not match email format"
           }
         })}
         type="email" className='w-50'
       />
       {error}
       <label htmlFor="password" className='mt-4'>password</label>
       <input
         id="password"
         {...register("password", {
           required: "required",
           minLength: {
             value: 5,
             message: "min length is 5"
           }
         })}
         type="password" placeholder='min length is 5' className='w-50'
       />
       {error}
       <button type="submit" className='btn btn-warning my-4'>SUBMIT</button>
     </form>
     <p>or?</p>
     <button onClick={handleGoogleSignIn} className='btn bg-primary text-white'><i className="fab fa-google"></i> Google SIgn IN</button>
 
     <h4 className='mt-4'>Already have an account? <Link to='/login'>Login</Link></h4></div>
      }
        </div>
    );
};

export default Register;

