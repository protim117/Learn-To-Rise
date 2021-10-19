import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useAuth = () => {
    // using context 
    return (
        useContext(AuthContext)
    );
};

export default useAuth;