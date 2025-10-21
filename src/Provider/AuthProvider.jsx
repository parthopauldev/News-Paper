import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export let AuthContext=createContext()
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null)
    let [loading,setLoading]=useState(true)
    console.log(user,loading);
    
    let createUser = (email, password) => {
        setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    }
    let logOut = () => {
          setLoading(true)
        return signOut(auth)
    }
    let logIn = (email, password) => {
          setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
     let unSubscribe=   onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser)
         setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    },[])
    let authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        loading,
        setLoading,
}
    return <AuthContext value={authData}>{ children}</AuthContext>
};

export default AuthProvider;