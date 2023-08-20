"use client"
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {
    const { user,updateAuth } = useAuth();
    const router = useRouter();
    const [info, setinfo] = useState({
      displayName:"",
      photoURL:""
    })
    
    useEffect(() => {
     if(user.displayName){
      setinfo({
        displayName:user.displayName,
        photoURL:user.photoURL
      })
     }
    }, [])
    
  
    const handleUpdate = async (e) => {
      e.preventDefault();
      const data = {
        displayName: e.target.name.value,
        photoURL:  e.target.photo.value.split("/").at(-2)?`https://drive.google.com/uc?id=${e.target.photo.value.split("/").at(-2)}`:"https://drive.google.com/uc?id=1HOz9fhwMvUXHSMBWPG6sDKB4S-Itehtg"
      }

      // fot the preexisting photo
      if(info.photoURL.startsWith("https://drive.google.com/uc?id=")){
        data.photoURL = info.photoURL
      }

      try {
        await updateAuth(data);
        router.push("/")
      } catch (err) {
        console.log(err);
        alert(err)
      }
  
    };
  
    return (
      <main className="center h-screen w-screen">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8">
          <form className="space-y-6" onSubmit={(e)=>handleUpdate(e)}>
            <h5 className="text-xl font-medium text-gray-900">
              Enter your details
            </h5>
           <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Name <span className='text-red-600 text-xl'>*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                placeholder="Abhishek Singhal"
                value={info.displayName}
                onChange={e=>setinfo({...info,displayName : e.target.value})}
                required
              />
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Photo
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="https://drive.google.com/file/d/1SQ7ttMeU76Okhg5A5sxw/view?usp=sharing"
                value={info.photoURL}
                onChange={e=>setinfo({...info,photoURL : e.target.value})}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <span className='text-sm text-gray-600'>"Enter sharable drive photo link"</span>
          
            <button
              type="submit"
              // onClick={Signup}
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Update details
            </button>
           
          </form>
        </div>
      </main>
    );
  };

export default page