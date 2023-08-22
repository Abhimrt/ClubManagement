"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React, { useState } from "react";

const Nabvar = () => {
  const { logout, user, clubData } = useAuth();
  const [userDropdown, setuserDropdown] = useState(false);
  const [responsiveDropdown, setresponsiveDropdown] = useState(false);

  return (
    <nav className=" p-4 flex justify-between items-center">
      {/* Left side: Logo */}
      <Link href={"/"} className="text-gray-700 font-semibold text-xl center">
        <img src="/images/logo.png" alt="" className="mr-1" />
        Club Events
      </Link>

      {/* Right side: Links and User */}
      <div className="space-x-1 sm:space-x-4 flex items-center">
        {!user ? (
          <>
          <Link className="text-sky-700 border-gray-500 hover:text-blue-900  hover:border-b-2" href="/contact">Contact</Link>
            <Link
              href={"/login"}
              type="button"
              className="scale-[.8] sm:scale-100 text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-0 sm:mr-5 mb-2 focus:outline-none "
            >
              Login
            </Link>
            <Link
              href={"signup"}
              type="button"
              className="scale-[.8] sm:scale-100 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-5 sm:mr-2 mb-2 "
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            {/* Links */}
            <div className="hidden md:flex space-x-4">
              <AfterLogin />
            </div>

            {/* Mobile Menu Button */}
            <div className="relative">
              <button
                className="md:hidden text-black"
                onClick={() => {
                  setresponsiveDropdown(!responsiveDropdown);
                  setuserDropdown(false);
                }}
              >
                Menu
              </button>
              {responsiveDropdown && (
                <div className="absolute top-10 right-0 mt-2 w-[50vw] bg-white  drop-shadow-lg rounded-md">
                  <div
                    className=" flex flex-col text-gray-600 m-4"
                    onClick={() => setresponsiveDropdown(false)}
                  >
                    <AfterLogin />
                  </div>
                </div>
              )}
            </div>

            {/* User Photo and Dropdown */}
            <div className="relative ">
              <img
                src={
                  user.photoURL
                } // Replace with your user's photo URL
                alt="User"
                className="w-8 h-8 rounded-full cursor-pointer "
                width={50}
                height={50}
                onClick={() => {
                  setresponsiveDropdown(false);
                  setuserDropdown(!userDropdown);
                }}
              />
              {userDropdown && (
                <div className="absolute top-10 right-0 mt-2 w-auto max-w-screen bg-white shadow-lg rounded-md">
                  <div className="px-4 py-2">
                    <p className="text-gray-800 font-semibold">
                      {user.displayName}
                    </p>
                    <p className="text-gray-600 text-sm">{user.email}</p>
                  </div>
                  <div className="border-t border-gray-300">
                    <button
                      className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

const AfterLogin = () => {
  const { clubData, user } = useAuth();
  return (
    <>
      {clubData && (
        <>
          <Link className="text-sky-700 border-gray-500 hover:text-blue-900  hover:border-b-2" href="/club/add">Add Event</Link>
          <Link className="text-sky-700 border-gray-500 hover:text-blue-900  hover:border-b-2" href={`/club/${user.uid}`}>Club Profile</Link>
          <Link className="text-sky-700 border-gray-500 hover:text-blue-900  hover:border-b-2" href="/club/info">Club Profile Edit</Link>
        </>
      )}
      <Link className="text-sky-700 border-gray-500 hover:text-blue-900  hover:border-b-2" href="/club/cluball">All Club</Link>
      <Link className="text-sky-700 border-gray-500 hover:text-blue-900  hover:border-b-2" href="/contact">Contact</Link>
    </>
  );
};

export default Nabvar;
