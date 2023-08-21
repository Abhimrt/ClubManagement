"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";

const Nabvar = () => {
  const { logout, user } = useAuth();
  useEffect(() => {
    // to change the data
  }, [user])


  return (
    <>
      <div className="w-full h-10  center m-4 py-5 sm:p-10 overflow-hidden">
        <Link href={"/"} className="text-2xl font-medium text-gray-700 hover:text-black ">  Club Events</Link>
        <div className=" grow flex justify-end items-center ">
          {!user ? (
            <>
              <Link
                href={"/login"}
                type="button"
                className="scale-75 sm:scale-100 text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-0 sm:mr-5 mb-2 focus:outline-none "
              >
                Login
              </Link>
              <Link
                href={"signup"}
                type="button"
                className="scale-75 sm:scale-100 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-5 sm:mr-2 mb-2 "
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="center mr-10 sm:mr-0">
              <button
                type="button"
                onClick={logout}
                className="scale-75 sm:scale-100  text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none "
              >
                Logout
              </button>
              <Link href={"/signup/info"} className="rounded-full aspect-square w-10 overflow-hidden mx-2 border shadow-sm border-gray-300 border-2"><Image title={user.displayName ? user.displayName : "User"} src={user.photoURL ? user.photoURL : "https://drive.google.com/uc?id=1HOz9fhwMvUXHSMBWPG6sDKB4S-Itehtg"} alt="u" width={40} height={40} /></Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nabvar;
