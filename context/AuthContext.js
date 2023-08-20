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
import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [clubData, setclubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  //   Check weather the user was logged in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await fetchClub(user.uid)
        await fetchEvents()

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
  
  
  // database apis for club data  =====================================

  // fetch data
  const fetchClub = async (e) => {
    const uid = e?e:user.uid
    if(uid){
      await getDoc(doc(db, "club",uid))
      .then((e) => {
        setclubData(e.data())
      })
      .catch((e) => console.log(e));
    }
  };
  
  // user set data
  const setUserData = (data) => {
    data = {...data,createdTime:new Date()}
    return  setDoc(doc(db, "club", user.uid), data);
  };
  
  // user update data
  const updateUserData = (data) => {
    return  updateDoc(doc(db, "club", user.uid), data);
  };

  //event apis

  // fetch data
  const fetchEvents = async () => {
      await getDocs(collection(db, "events"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(newData);
      })
      .catch((e) => console.log(e));
  };
  
  // user set event data
  const setEventData = (data) => {
    data = {...data,createdTime:new Date()}
    return  setDoc(doc(db, "club", user.uid), data);
  };
  
  // // user update data
  // const updateUserData = (data) => {
  //   return  updateDoc(doc(db, "club", user.uid), data);
  // };



  return (
    <AuthContext.Provider
      value={{ user,clubData, login, signup, logout, forgot, verify, setUserData, updateAuth, updateUserData , fetchClub}}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
