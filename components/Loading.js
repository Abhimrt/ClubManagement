"use client"
import { useAuth } from "@/context/AuthContext";
import React from "react";

const Loading = () => {

    const { Loading } = useAuth();
    console.log(Loading)

    return (
        <>
            {
                Loading &&
                (
                    <>
                        <div className="fixed  inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 " >
                            <div className="animate-spin center rounded-full aspect-video w-[20vw] border-t-[15px] border-b-[15px] border-sky-700 drop-shadow-sm">
                                <div className="animate-pulse  w-10 aspect-square rounded-full bg-sky-500" ></div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default Loading;
