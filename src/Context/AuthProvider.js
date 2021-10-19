import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
  const allcontext=useFirebase();
    //   authcontext 
    return (
        <AuthContext.Provider value={allcontext} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;