"use client"
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { AiOutlineLike } from 'react-icons/ai';

// contact
// date
// details
// id
// image
// link
// location
// mode
// name
// postedTime = Timestamp {seconds: 1692521659, nanoseconds: 998000000}
// time
// uid


const Post = () => {
    const { events } = useAuth();
    // console.log(events)

    function tConv24(time24) {
        var ts = time24;
        var H = +ts.substr(0, 2);
        var h = (H % 12) || 12;
        h = (h < 10) ? ("0" + h) : h;  // leading 0 at the left for 1 digit hours
        var ampm = H < 12 ? " AM" : " PM";
        ts = h + ts.substr(2, 3) + ampm;
        return ts;
    };


    return (
        <>
            {events && events.map((e, i) => {
                return (
                    <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-lg my-5 hover:shadow-2xl duration-150" key={i}>
                        <Image className="rounded-t-lg h-full w-full" src={e.image} alt="" width={400} height={300} />
                        <div className="p-5 ">
                            <Link href='profile' className='my-2 flex items-center' title='CXI'>
                                <Image className="rounded-full border-2" src={e.logo} alt="" width={60} height={60} />
                                <span className='mx-2 font-medium text-lg sm:text-xl  text-gray-900'>{e.clubName}</span>
                            </Link>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{e.name} </h5>
                            <div className='flex flex-wrap justify-between items-center text-lg text-gray-700 my-2'>
                                <p>Date: <span className='text-blue-700'>{e.date}</span></p>
                                <p className='mx-5'>Time: <span className='text-blue-700' >{tConv24(e.time)}</span></p>

                            </div>
                            <div className='flex flex-wrap justify-evenly items-center text-lg text-gray-700 my-2'>
                                <p className=''>Location: <span className='text-blue-700' > {e.location}</span></p>
                                <p className='mx-5'>Contact: <span className='text-blue-700' > {e.contact}</span></p>

                            </div>
                            <p className="mb-3 font-normal text-gray-700">{e.details.split("<br/>").map((para, ind) => (<span key={ind}>{para}<br /></span>))} </p>

                            {/* <div className='w-full p-2'>
                    <AiOutlineLike className='text-3xl'/>
                </div>              */}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Post