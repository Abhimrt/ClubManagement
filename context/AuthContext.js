"use client"
import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth'
import {auth, db} from '@/firebase/initializer'
import { useRouter } from 'next/navigation'
import { collection, getDocs } from 'firebase/firestore'

const AuthContext = createContext({})


export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter();

//   Check weather the user was logedin or not
  useEffect(() => {
    console.log(db)
    
    fetch()


    const unsubscribe = onAuthStateChanged(auth, async(user) => {
      if (user) {
        setUser(user)

        // user is not verified yet
        if(!user.emailVerified){
          router.push("/signup/verification")
        }
        
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  // 
  const fetch = async()=>{
    await getDocs(collection(db, "testing"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));             
                console.log( newData);
            }).catch((e)=>console.log(e))
  }


//   Signup
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }


//   Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }


//   Logout
  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  // forgot
  const forgot = (email) =>{
    return sendPasswordResetEmail(auth, email)
  }

  // verify
  const verify = () =>{
    return sendEmailVerification(auth.currentUser)
    // console.log(auth.currentUser)
    // console.log(user)
    // if(auth.currentUser){
    //   sendEmailVerification(auth.currentUser)
    //   .then((e) => {
    //     console.log("mail sent")
    //     console.log(e)
    //   }).catch((err)=>{
    //     console.log(err)
    //   })
    // }
  }

  // fetch detail
  const detail = () =>{
    setUser(auth.currentUser);
    console.log(auth.currentUser)
    console.log(user)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, forgot, verify, detail }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
