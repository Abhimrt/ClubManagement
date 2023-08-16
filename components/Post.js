import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { AiOutlineLike } from 'react-icons/ai';

const Post = () => {
    
    return (
        <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-lg my-5 hover:shadow-2xl duration-150">
            <Image className="rounded-t-lg h-full w-full" src="https://drive.google.com/uc?id=1SQ7ttMeU76uCBGJCOHS9VKOkhg5A5sxw" alt="" width={400} height={300} />
            <div className="p-5 ">
                <Link href='profile' className='my-2 flex items-center' title='CXI'>
                    <Image className="rounded-full border-2" src="/images/user.jpeg" alt="" width={60} height={60} />
                    <span className='mx-2 font-medium text-lg sm:text-xl  text-gray-900'>COLLABORATION x INNOVATION</span>
                </Link>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021 </h5>
                <div className='flex flex-wrap justify-between items-center text-lg text-gray-700 my-2'>
                    <p>Date: <span className='text-blue-700'>25/5/2023</span></p>
                    <p className='mx-5'>Time: <span className='text-blue-700' > 12:20pm</span></p>

                </div>
                <div className='flex flex-wrap justify-evenly items-center text-lg text-gray-700 my-2'>
                    <p className=''>Location: <span className='text-blue-700' > M-007</span></p>
                    <p className='mx-5'>Contact: <span className='text-blue-700' > 9921XXXXXX</span></p>

                </div>
                <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti quod eligendi consectetur, ea velit? Nulla quod in deserunt, repellat ipsum aspernatur odit possimus recusandae est obcaecati quae corrupti autem. </p>

                {/* <div className='w-full p-2'>
                    <AiOutlineLike className='text-3xl'/>
                </div>              */}
            </div>
        </div>
    )
}

export default Post