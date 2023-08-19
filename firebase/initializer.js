"use client"
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBMV9rGl22SC6bEpvufaMoF0R8KQbKOWK0",
    authDomain: "clubmangement-dbf41.firebaseapp.com",
    projectId: "clubmangement-dbf41",
    storageBucket: "clubmangement-dbf41.appspot.com",
    messagingSenderId: "927485682957",
    appId: "1:927485682957:web:4fbc7db68ccbf8fe817c44",
    measurementId: "G-H0VH7F0XYQ"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  export {auth,db}
