"use client"
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const noAuthRequired = [ '/login', '/signup']

  // useEffect(() => {
  //   if (user) {
  //       if(noAuthRequired.includes(pathname)){
  //           router.push('/')
  //       }
  //   }else{
  //       if(!noAuthRequired.includes(pathname) && pathname !== "/"){
  //           router.push('/')
  //       }
  //   }
  // }, [router, user])

  return <>{children}</>
}

export default ProtectedRoute