import React, { Children, createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";

const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // create email with user name and password
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  user log in
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // log in with google
  const loginWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };
  // log in with github
  const signInWithGithub = (provider) => {
    return signInWithPopup(auth, provider);
  };

// log out
const logOut=()=>{
    return signOut(auth)
}

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    });
    return unsubscribe();
  }, []);

  const userInfo = {
    user,
    signUpWithEmail,
    userSignIn,
    loginWithGoogle,
    signInWithGithub,
    logOut
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
