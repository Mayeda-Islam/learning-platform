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
  const [loading,setLoading]=useState(true)
  // create email with user name and password
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  user log in
  const userSignIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  // log in with google
  const loginWithGoogle = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };
  // log in with github
  const signInWithGithub = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

// log out
const logOut=()=>{
  setLoading(true)
    return signOut(auth)
}

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false)  
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
    logOut,
    setLoading,loading
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
