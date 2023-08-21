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
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user data
  const [clubData, setclubData] = useState(null); // if the person is the club verified
  const [events, setevents] = useState(null); // all the events data
  const [clubs, setclubs] = useState(null); // all the clubs data
  const [Loading, setLoading] = useState(true);
  const router = useRouter();

  //   Check weather the user was logged in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true)
      // await fetchEvents();
      if (user) {
        setUser(user);
        await fetchClub(user.uid);

        // user is not verified yet
        if (!user.emailVerified) {
          router.push("/signup/verification");
        } else if (user.displayName == null) {
          router.push("/signup/info");
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth.currentUser]);

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
  const updateAuth = (data) => {
    if (auth.currentUser) return updateProfile(auth.currentUser, data);
    alertN("First Login", 1);
  };



  // database apis for club data  =====================================

  // fetch data
  const fetchClub = async (e) => {
    const uid = e ? e : user.uid;
    if (uid) {
      await getDoc(doc(db, "club", uid))
        .then((e) => {
          setclubData(e.data());
        })
        .catch((e) => console.log(e));
    }
  };

  // user set data
  const setUserData = (data) => {
    data = { ...data, createdTime: new Date(), email: user.email };
    return setDoc(doc(db, "club", user.uid), data);
  };

  // user update data
  const updateUserData = (data) => {
    return updateDoc(doc(db, "club", user.uid), data);
  };

  //event apis ========================================

  // fetch data
  const fetchEvents = async () => {
    // all events data
    await getDocs(collection(db, "events"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // console.log(newData);
        setevents(newData);
      })
      .catch((e) => console.log(e));

    // all club data
    await getDocs(collection(db, "club"))
      .then((querySnapshot) => {
        const newData = {};

        querySnapshot.docs.forEach((doc) => {
          newData[doc.id] = doc.data();
        });
        console.log(newData);
        setclubs(newData);
      })
      .catch((e) => console.log(e));
  };

  // user set event data
  const setEventData = (data) => {
    data = {
      ...data,
      postedTime: new Date(),
      uid: user.uid,
      clubName: clubData.clubName,
      logo: clubData.photoURL,
    };
    return addDoc(collection(db, "events"), data);
  };

  // fetch data for any database =========================
  const fetchDataId = async (uid, database) => {
    return await getDoc(doc(db, database, uid));
  };

  // alert ======================================
  // alert content start
  const [showAlert, setshowAlert] = useState(false);
  const [textAlert, settextAlert] = useState("");
  const [warnAlert, setwarnAlert] = useState(1);
  const alertN = (text, warn) => {
    settextAlert(text);
    setwarnAlert(warn);
    setshowAlert(true);
  };
  // show, setShow, text,warn1
  // alert content end

  return (
    <AuthContext.Provider
      value={{
        user,
        alertN,
        showAlert,
        setshowAlert,
        textAlert,
        warnAlert,
        clubData,
        events,
        clubs,
        login,
        signup,
        logout,
        forgot,
        verify,
        setUserData,
        updateAuth,
        updateUserData,
        fetchClub,
        setEventData,
        fetchDataId,
        // loading
        Loading,
        setLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
