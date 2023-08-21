"use client"
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

/*
  non login user
    "/"
    "/signup"
    "/signup/verification"
    "signup/info"
    "login"

  login user can't go to the non login user page accept
  "/"
  -> special condition if( user.emailVerified == false)
      "/signup/verification"
  -> special condition if( user.displayName == null)
      "/signup/info"


      if (!user.emailVerified) {
          router.push("/signup/verification");
        } else if (user.displayName == null) {
          router.push("/signup/info");
        }
    
*/

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const noAuthRequired = ["/", "/signup", "/signup/verification", "/signup/info", "/login","/contact"]

  useEffect(() => {
    if (user) { // logged in
      if (!user.emailVerified) {
        router.push("/signup/verification");
      } else if (user.displayName == null) {
        router.push("/signup/info");
      } else if (!((pathname == "/") || (pathname == "/contact")) && noAuthRequired.includes(pathname)) {
        router.push('/')
      }
    } else { // logged out
      if (!noAuthRequired.includes(pathname)) {
        router.push('/')
      }
    }

  }, [router, user])

  return <>{children}</>
}

export default ProtectedRoute