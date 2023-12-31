"use client"
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {

    const { user, verify, alertN, setLoading } = useAuth();
    const router = useRouter();
    const [message, setmessage] = useState("Processing your information")


    useEffect(() => {
        if (!user) {
            router.push("/"); // if user is not login then it return to the home page
        } else if (user.emailVerified) {
            router.push("/signup/info"); // if user is already verified then redirect him to the info page
        } else {
            setmessage("You were not verified please verify your mail through mail. If you didn't found any mail then click on the below button.")
        }
    }, [])

    const sendMail = async () => {
        if (user.emailVerified) { // if user is already verified
            router.push("/signup/info")
        } else {
            // code to send mail
            try {
                setLoading(true)
                await verify();
                setLoading(false)
                alertN("A verification mail sent to your email id.", 3)
                setmessage("A verification mail sent to your email id. Please verify your mail and then refresh this page.")
            } catch (err) {
                setLoading(false)
                console.log(err);
                alertN(err.message, 1)
            }
        }
    }

    return (
        <div className='w-full p-10 center flex-col'>
            <h1 className='text-xl mb-10'>Email: {user && user.email}</h1>
            <h3>{message}</h3>
            {/* mail sending button */}
            <button
                type="button"
                onClick={sendMail}
                className=" my-10 scale-100 text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-0 sm:mr-5 mb-2 focus:outline-none "
            >
                Send verification mail
            </button>
            {/* reload button */}
            <button
                type="button"
                onClick={() => window.location.reload()}
                className=" my-10 scale-100 text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-0 sm:mr-5 mb-2 focus:outline-none "
            >
                Reload
            </button>
        </div>
    )
}

export default page