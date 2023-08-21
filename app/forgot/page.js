"use client"
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
  const router = useRouter();
  const { forgot, setLoading, alertN } = useAuth();

  const handleforgot = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    try {
      setLoading(true)
      await forgot(email);
      setLoading(false)
      alertN("Check your Email for Recovery", 1)
      router.push("/");
    } catch (err) {
      setLoading(false)
      alertN(err.message, 1)
      console.log(err);
    }
  };

  return (
    <main className="center h-screen w-screen">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8">
        <form className="space-y-6" action="#" onSubmit={handleforgot}>
          {/* heading */}
          <h5 className="text-xl font-medium text-gray-900">
            Enter Email id to change password
          </h5>

          {/* input div */}
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="name@company.com"
              required
            />
          </div>

          {/* button */}
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Reset Password
          </button>

        </form>
      </div>
    </main>
  )
}

export default page