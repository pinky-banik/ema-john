import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import InitilizeAuthentication from '../components/Firebase/FirebaseInit';


InitilizeAuthentication();
const useFirebase = () => {
    const [user,SetUser] =useState({});



    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
        .then(result =>{
            console.log(result.user);
        })
    }
    const logOut =() =>{
        signOut(auth)
        .then(()=>{
            SetUser({})
        })
    }
    //observer wheather user auth state changed or not
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                SetUser(user);
            }
        })

    },[])



    
    return {
        user,
        logOut,
        signInUsingGoogle
    }
};

export default useFirebase;