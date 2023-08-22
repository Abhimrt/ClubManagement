"use client"
import Hr from "@/components/Hr";
import Post from "@/components/Post";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {

    const { clubs ,user, alertN} = useAuth()
    const [data, setdata] = useState()
    const [loadPage, setloadPage] = useState(false)
    const router = useRouter()

    useEffect(() => {
        // checking that the id given in the search box is valid or not
        if (user && clubs[params.uid]) {
            setdata(clubs[params.uid])
            setloadPage(true)
        } else {
            alertN("Please Login to access this page.",2)
            router.push("/")
        }
    }, [])

    return (
        <>
            {
                !loadPage ? <></> : (
                    <div >
                        {/* name and image of the club */}
                        <div
                            className="my-4 sm:my-6 flex items-center m-auto w-fit flex-wrap justify-center"
                            title={data.clubName}
                        >
                            <img
                                className="rounded-full border-2 shadow-md m-1"
                                src={data.photoURL}
                                alt=""
                                width={150}
                                height={150}
                            />
                            <div
                                className="m-4 font-medium text-xl sm:text-4xl overflow-hidden  text-gray-900"
                            >
                                {data.clubName}
                            </div>
                        </div>

                        {/* about section */}
                        <div className="flex justify-center  items-center flex-col lg:flex-row sm:mx-10">
                            {/* official box */}
                            <div className="m-4 w-[92vw] lg:w-1/2 self-stretch bg-white rounded-lg p-4 shadow-md">
                                <h3 className="text-xl font-medium underline underline-offset-4 decoration-gray-400 mb-2">
                                    Official
                                </h3>
                                <table className="text-left ml-2 profile-table">
                                    <tbody>
                                        <tr>
                                            <th>Name </th>
                                            <td>: {data.official.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Contact </th>
                                            <td>: {data.official.phone}</td>
                                        </tr>
                                        <tr>
                                            <th>Position </th>
                                            <td>: {data.official.position}</td>
                                        </tr>
                                        <tr>
                                            <th>Email </th>
                                            <td>: {data.official.email}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            {/* contact us box */}
                            <div className="m-4 w-[92vw] lg:w-1/2 self-stretch bg-white rounded-lg p-4 shadow-md">
                                <h3 className="text-xl font-medium underline underline-offset-4 decoration-gray-400 mb-2">
                                    Contact Us
                                </h3>
                                <table className="text-left ml-2 profile-table">
                                    <tbody>
                                        <tr>
                                            <th>Email </th>
                                            <td>: {data.email}</td>
                                        </tr>
                                        {/* website */}
                                        {
                                            data.social.website !== "" && (<tr>
                                                <th>Website </th>
                                                <td>
                                                    <a href={data.social.website} target="_blank">
                                                        : Click me
                                                    </a>
                                                </td>
                                            </tr>)
                                        }
                                        {/* linkedin */}
                                        {
                                            data.social.linkedin !== "" && (<tr>
                                                <th>Linkedin </th>
                                                <td>
                                                    <a href={data.social.linkedin} target="_blank">
                                                        : Click me
                                                    </a>
                                                </td>
                                            </tr>)
                                        }
                                        {/* Instagram */}
                                        {
                                            data.social.instagram !== "" && (<tr>
                                                <th>Instagram </th>
                                                <td>
                                                    <a href={data.social.instagram} target="_blank">
                                                        : Click me
                                                    </a>
                                                </td>
                                            </tr>)
                                        }
                                        {/* Facebook */}
                                        {
                                            data.social.facebook !== "" && (<tr>
                                                <th>Facebook </th>
                                                <td>
                                                    <a href={data.social.facebook} target="_blank">
                                                        : Click me
                                                    </a>
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* post of the club */}
                        <main className="center min-h-screen w-screen flex-col p-5 ">
                            <Post id = {params.uid}/>
                        </main>
                    </div >
                )
            }
        </>
    );
};

export default page;
