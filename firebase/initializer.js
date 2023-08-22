// "use client"
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// configration data is stored on the cxi@miet.ac.in firebase
const firebaseConfig = {
  apiKey: `${process.env.apikey}`,
  authDomain: `${process.env.authDomain}`,
  projectId: "clubmangement-dbf41",
  storageBucket: `${process.env.storageBucket}`,
  messagingSenderId: `${process.env.messagingSenderId}`,
  appId: `${process.env.appId}`,
  measurementId: `${process.env.measurementId}`
};
console.log(process.env.apikey," inti")
console.log(process.env.messagingSenderId," inti")
console.log(process.env.authDomain," inti")

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db }
