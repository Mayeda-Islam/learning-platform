import React, { Children, createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.init';


const auth=getAuth(app)
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const user='konika'
    // create email with user name and password
    const signUpWithEmail=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email,password)
    }
//  user log in
const userSignIn=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}
    
    const userInfo={user , signUpWithEmail,userSignIn}
    return (
        <AuthContext.Provider  value={ userInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;