"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React from "react";

const Nabvar = () => {
  const { logout, user } = useAuth();

  return (
    <>
        <div className="w-full h-10  center m-4 py-5 sm:p-10 overflow-hidden">
      <Link href={"/"} className="text-2xl font-medium text-gray-700 hover:text-black ">MIET Club Events</Link>
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
          <button
            type="button"
            onClick={logout}
            className="scale-75 sm:scale-100 mr-8 sm:mr-2 text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none "
          >
            Logout
          </button>
        )}
      </div>
    </div>
    </>
  );
};

export default Nabvar;
