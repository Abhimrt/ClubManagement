"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "@/firebase/initializer";
import { useRouter } from "next/navigation";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  //   Check weather the user was logedin or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        console.log(user);

        // user is not verified yet
        if (!user.emailVerified) {
          router.push("/signup/verification");
        }

        if(user.displayName == null){
          router.push("/signup/info")
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //authentication base apis ==================================
  
  //   Signup
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  //   Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Logout
  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };
  
  // forgot
  const forgot = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  
  // verify
  const verify = () => {
    return sendEmailVerification(auth.currentUser);
  };

  //update user 
  const updateAuth = (data) =>{
    if(auth.currentUser)
      return updateProfile(auth.currentUser, data);
    alert("First Login")
  }
  
  
  // database apis =====================================

  // fetch data
  const fetch = async () => {
    await getDocs(collection(db, "testing"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(newData);
      })
      .catch((e) => console.log(e));
  };
  
  // user set data
  const setUserData = (data) => {
    return  setDoc(doc(db, "users", user.uid), data);
  };



  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, forgot, verify, setUserData, updateAuth }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
