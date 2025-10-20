import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export let AuthContext=createContext()
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null)
    console.log(user);
    
    let createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
    }
    let logOut = () => {
        return signOut(auth)
    }
    let logIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
     let unSubscribe=   onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
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
        logIn
}
    return <AuthContext value={authData}>{ children}</AuthContext>
};

export default AuthProvider;