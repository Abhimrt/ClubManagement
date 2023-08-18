"use client"
import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import auth from '@/firebase/initializer'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

//   Check weather the user was logedin or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])


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



  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
