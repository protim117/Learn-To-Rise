import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initAuth from "../Firebase/firebase.init";

initAuth();

const useFirebase=()=>{
    const[user,setUser]=useState({});
    const[error,setError]=useState('');
    const[isLoading,setIsLoading]=useState(true);
    const [successful,setSuccessful]=useState(false);
    
    

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn=()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut=()=>{
      setIsLoading(true)
        signOut(auth).then(() => {
           setUser({});
          })
          .finally(()=> setIsLoading(false))
    }

  
    const signUpWithEmail = (email, password, name) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
          .then((res) => {
            setUser(res.user)
            
              updateProfile(auth.currentUser, {
                displayName: name,
              })
             .then(()=>{
               setUser(user);
           
             })

          }).catch(err => {setError(err.message)
        }
          )
          .finally(()=>setIsLoading(false))
  }
  
 

    const signInWIthEmail=(email, password)=>{
      setError('');
      setIsLoading(true);
      
      signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    setError('');
    const user = result.user;
    setUser(user);
    setSuccessful(true);
  
  })
  .catch((error) => {
    setError( error.message);
    setSuccessful(false);
   
  })
  .finally(()=>setIsLoading(false))
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
           setUser(user);
            
          }
          
          setIsLoading(false);
        })
          
    },[user])


    return {
        user,isLoading,setIsLoading, googleSignIn,logOut,signUpWithEmail,signInWIthEmail,error,setError,successful
    }

}

export default useFirebase;
