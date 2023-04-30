import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import SingUpPage from '../Pages/SingUpPage/SingUpPage';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const google = new GoogleAuthProvider();
const github = new GithubAuthProvider();


const AuthProvider = ({children}) => {

    const [user, SetUser] = useState(null);
    console.log(user);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logInWithGoogle = () =>{  
        return signInWithPopup(auth, google)
    }

    const logInWithGithub = () =>{
        return signInWithPopup(auth, github)
    }

    const logOutUser = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            SetUser(loggedUser)
            setLoading(false)
        })

        return()=>{
            unsubscribe()
        }

    },[])

    const authData = {
        user,
        loading,
        createUser,
        logInUser,
        logInWithGoogle,
        logInWithGithub,
        logOutUser
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;