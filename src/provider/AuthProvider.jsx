/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import auth from "../firebase/authFirebase";

export const userContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const faceBookProvider = new FacebookAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  // signUp with email or password
  const creactAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn with email or password
  const LogInWithEOrP = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // SignOut
  const LogOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //LogIn with social
  const LogInWithSocial = (social) => {
    if (social == "google") {
      return signInWithPopup(auth, googleProvider);
    } else if (social == "facebook") {
      return signInWithPopup(auth, faceBookProvider);
    }
    return signInWithPopup(auth, gitHubProvider);
  };

  ///update profile
  const updateUserProfile = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  // is have user
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => {
      unsubcribe();
    };
  }, []);

  const info = {
    user,
    creactAccount,
    LogInWithEOrP,
    LogOutUser,
    loading,
    setLoading,
    LogInWithSocial,
    updateUserProfile,
  };
  return <userContext.Provider value={info}>{children}</userContext.Provider>;
}

export default AuthProvider;
