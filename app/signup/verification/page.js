"use client"
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {

    const { user, verify,alertN } = useAuth();
    const router = useRouter();
    const [message, setmessage] = useState("Processing your information")


    useEffect( () => {
        if (user!==null && user.emailVerified) {
            router.push("/");
        }else{
            
            setmessage("You were not verified please verify your mail through mail. If you didn't found any mail then click on the below button.")
        }
    }, [])

    const sendMail = async()=>{
        if(user.emailVerified){
            router("/signup/info")
        }else{
            try {
                await verify();
                alertN("A verification mail sent to your email id.",2)
                setmessage("A verification mail sent to your email id. Please verify your mail and then refresh this page.")
            } catch (err) {
                console.log(err);
                alertN(err,1)
            }
        }
    }

    return (
        <div className='w-full p-10 center flex-col'>
            <h1 className='text-xl mb-10'>Email: {user.email}</h1>
            <h3>{message}</h3>
            <button
                type="button"
                onClick={sendMail}
                className=" my-10 scale-100 text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-0 sm:mr-5 mb-2 focus:outline-none "
            >
                Send verification mail
            </button>
            <button
                type="button"
                onClick={()=>window.location.reload()}
                className=" my-10 scale-100 text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-0 sm:mr-5 mb-2 focus:outline-none "
            >
                Reload
            </button>
        </div>
    )
}

export default page