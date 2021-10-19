import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const{user,isLoading}=useAuth();
    if(isLoading){
      return   (
      <div className="container mx-auto w-25">
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
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;