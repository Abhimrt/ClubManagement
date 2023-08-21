"use client"
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { info } from '@/Data/signup';
import Inputdiv from '@/components/Inputdiv';

const page = () => {

  const { user, updateAuth, alertN, setLoading } = useAuth();
  const router = useRouter();


  useEffect(() => {
    // if the user basic details is already present in the database
    if (!user) {
      router.push("/")// if user is not logged in 
    } else if (user.displayName) {
      // it return to the homepage
      router.push("/")
    }
  }, [])


  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = {
      displayName: e.target.name.value,
      // making url fit for the application if user didn't give any photo it set itself a user photo
      photoURL: e.target.photo.value.split("/").at(-2) ? `https://drive.google.com/uc?id=${e.target.photo.value.split("/").at(-2)}` : "https://drive.google.com/uc?id=1HOz9fhwMvUXHSMBWPG6sDKB4S-Itehtg"
    }

    try {
      setLoading(true)
      await updateAuth(data);
      setLoading(false)
      router.push("/")
    } catch (err) {
      setLoading(false)
      console.log(err);
      alertN(err.message, 1)
    }

  };

  return (
    <main className="center h-screen w-screen">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8">
        <form className="space-y-6" onSubmit={(e) => handleUpdate(e)}>
          <h5 className="text-xl font-medium text-gray-900">
            Enter your details
          </h5>

          {/* input */}
          <Inputdiv data={info} />


          {/* button for the user */}
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