"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const page = () => {
  const {  signup } = useAuth();
  const router = useRouter();
  

  const handleSignup = async (e) => {
    e.preventDefault();
    let email = e.target.email.value
    let password = e.target.password.value
    let Cpassword = e.target.Cpassword.value
    if(password !== Cpassword) {
        alert("Password doesn't match")
        e.target.password.value = ""
        e.target.Cpassword.value = ""
        return;
    }
    try {
      await signup(email, password);
      router.push("/signup/verification")
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <main className="center h-screen w-screen">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8">
        <form className="space-y-6" onSubmit={(e)=>handleSignup(e)}>
          <h5 className="text-xl font-medium text-gray-900">
            Sign Up to our platform
          </h5>
         <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              htmlFor="Cpassword"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Confirm password
            </label>
            <input
              type="password"
              name="Cpassword"
              id="Cpassword"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        
          <button
            type="submit"
            // onClick={Signup}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Sign Up
          </button>
          <div className="text-sm font-medium text-gray-500">
            Already registered?{" "}
            <Link href="/login" className="text-blue-700 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default page;
