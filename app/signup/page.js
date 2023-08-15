"use client"
import Link from 'next/link'
import React from 'react'
import auth from "@/firebase/initializer"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const page = () => {
    // const auth = getAuth(app);
    const Signup = () => {
        console.log(auth)
        const email = "abhisingadsfha1l112001@gmail.com"
        const password = "Abhi1234@"
        let create = createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Account Created")
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error code",errorCode)
                console.log("Error Message", errorMessage )
                // ..
            });
    }



    return (
        <main className='center h-screen w-screen'>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8">
                <form className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900">Sign Up to our platform</h5>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Full Name" required />
                    </div>
                    <div>
                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">Your Number</label>
                        <input type="number" name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="9927XXXXXX" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    {/* <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 ">Remember me</label>
            </div>
            <a href="#" className="ml-auto text-sm text-blue-700 hover:underline ">Lost Password?</a>
        </div> */}
                    <button type="submit" onClick={Signup} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign Up</button>
                    <div className="text-sm font-medium text-gray-500">
                        Already registered? <Link href="/login" className="text-blue-700 hover:underline">Login</Link>
                    </div>
                </form>
            </div>
        </main>

    )
}

export default page 