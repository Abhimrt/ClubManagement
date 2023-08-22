import Hr from "@/components/Hr";
import React from "react";
import { FaBuilding,FaRoute, FaPhone  } from "react-icons/fa";
import { contributors } from "@/Data/Contact";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-[90vh] center flex-col w-screen">
        {/* top content */}
      <div className="flex justify-around w-full items-start flex-wrap my-8">
        <div className="center flex-col w-fit sm:w-1/3 m-5">
          <div className="p-4 rounded-md shadow-md bg-gray-700">
            <FaBuilding className="text-2xl text-white" />
          </div>
          <h2 className="font-bold text-xl mt-4">Company information:</h2>
          <p className="text-gray-700 text-center">
            Collaboration x Innovation
          </p>
        </div>
        <div className="center flex-col w-fit sm:w-1/3 m-5">
          <div className="p-4 rounded-md shadow-md bg-gray-700">
            <FaRoute className="text-2xl text-white" />
          </div>
          <h2 className="font-bold text-xl mt-4">Address:</h2>
          <p className="text-gray-700 text-center">
          Collaboration x Innovation,
          <br />Meerut Institute Of Engineering and Technology,
          <br />Meerut,250005.
          </p>
        </div>
        <div className="center flex-col w-fit sm:w-1/3">
          <div className="p-4 rounded-md shadow-md bg-gray-700">
            <FaPhone className="text-2xl text-white" />
          </div>
          <h2 className="font-bold text-xl mt-4">Contact us:</h2>
          <p className="text-gray-700 text-center">
            Email: cxi@miet.ac.in <br />
            <a href="https://cxi-miet.github.io/" target="_blank" className="hover:border-b-4"> Website</a>
          </p>
        </div>
      </div>

      {/* contributors */}
      <Hr text="Contributors" />
      <div className=" center flex-wrap">
            {
                contributors.map((e,i)=>{
                    return(
                        <div className=" relative m-5 shadow-lg hover:drop-shadow-md overflow-hidden">
                            <div className="absolute opacity-30 animate-ping-slow top-0 -right-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-48 aspect-video rounded-full"></div>
                            <div className="backdrop-blur-sm bg-white/30 center  px-4 pt-4 rounded-md " key={i}>
                                <Image src={e.image} className="drop-shadow-lg" height={120} width={120} alt="pic"/>
                                <div className="h-full ml-3">
                                    <div className="my-5">
                                      <h4 className="text-xl font-bold">{e.name}</h4>
                                      <p className="text-[10px] text-gray-500">{e.tags}</p>
                                    </div>
                                    <div className="flex justify-around items-center h-full text-[14px] font-medium" >
                                        <a className="text-sky-700 border-gray-500 hover:text-blue-900  hover:border-b-2" href={e.linkedin}>LinkedIn</a>
                                        <a className="text-sky-700 border-gray-500 hover:text-blue-900  hover:border-b-2" href={e.porfolio}>Website</a>
                                        <a className="text-sky-700 border-gray-500 hover:text-blue-900  hover:border-b-2" href={e.github}>Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
      </div>
    </div>
  );
};

export default page;
