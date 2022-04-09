import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, } from "firebase/auth";
import {  useEffect, useState } from "react";
import app from "../../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
            const user = result.user;
            console.log(user)
        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
      };

      const handelSignOut = () => {
            signOut(auth)
            .then(() =>{})
      }
      
      useEffect(() => {
            onAuthStateChanged(auth, user => {
                  setUser(user)
            })
      },[])
      
  return { signInWithGoogle, handelSignOut, user };
};

export default useFirebase;
