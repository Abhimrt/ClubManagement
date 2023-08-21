"use client";
import Hr from "@/components/Hr";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const { clubs, events } = useAuth();

  return (
    <main className="w-screen min-h-[80vh]  center flex-col p-8">
      <Hr text="All Clubs"/>
      {/* club start +++++++++++++++++++++++++ */}
      <div className="relative overflow-x-auto shadow-md rounded-lg scale-[.6] sm:scale-75 md:scale-100">
        <table className="w-full text-sm text-left  text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Profile
              </th>
              <th scope="col" className="px-6 py-3">
                Club name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {clubs &&
              Object.values(clubs).map((e, i) => {
                return (
                  <tr
                    className=" border-b bg-gray-800 border-gray-700 hover:bg-gray-600"
                    key={i}
                  >
                    <td className="px-6 py-4"><Image src={e.photoURL} className="rounded-full shadow-sm w-10 aspect-square" width={40} height={40} alt="photo"/></td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap text-white"
                    >
                      <Link
                        href={`/club/${e.uid}`}
                        className="font-medium  hover:underline"
                      >
                        {e.clubName}
                      </Link>
                    </th>
                    <td className="px-6 py-4">{e.email}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    {/* club end --------------------------- */}
      <Hr text="All Events"/>
      {/* event start +++++++++++++++++++++++++ */}
      <div className="relative overflow-x-auto shadow-md rounded-lg scale-[.6] sm:scale-75 md:scale-100">
        <table className="w-full text-sm text-left  text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Organizer
              </th>
              <th scope="col" className="px-6 py-3">
                Event name
              </th>
              <th scope="col" className="px-6 py-3">
                Contact
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {events &&
              events.map((e, i) => {
                return (
                  <tr
                    className=" border-b bg-gray-800 border-gray-700 hover:bg-gray-600"
                    key={i}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap text-white"
                    >
                      <Link
                        href={`/club/${e.uid}`}
                        className="font-medium  hover:underline"
                      >
                        {e.clubName}
                      </Link>
                    </th>
                    <td className="px-6 py-4">{e.name}</td>
                    <td className="px-6 py-4">{e.contact}</td>
                    <td className="px-6 py-4">{e.date}</td>
                    <td className="px-6 py-4">{e.time}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {/* event end --------------------------- */}
    </main>
  );
};

export default page;
