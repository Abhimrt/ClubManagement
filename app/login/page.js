"use client";
import Link from "next/link";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { login as renderData } from "@/Data/signup";
import Inputdiv from "@/components/Inputdiv";

const page = () => {
  const router = useRouter();
  const { login, setLoading, alertN } = useAuth();

  const handlelogin = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    try {
      setLoading(true)
      await login(email, password);
      setLoading(false)
      router.push("/");
    } catch (err) {
      setLoading(false)
      console.log(err);
      alertN(err.message, 1)
    }
  };

  return (
    <main className="center h-screen w-screen">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8">
        <form className="space-y-6" action="#" onSubmit={handlelogin}>
          <h5 className="text-xl font-medium text-gray-900">
            Sign in to our platform
          </h5>
          {/* input field */}
          <Inputdiv data={renderData} />

          {/* button */}
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Login to your account
          </button>

          {/* forgot password */}
          <div className="text-sm font-medium text-gray-500">
            <Link href="/forgot" className="text-blue-700 hover:underline">
              Forget Password
            </Link>
          </div>

          {/* Not registered */}
          <div className="text-sm font-medium text-gray-500">
            Not registered?{" "}
            <Link href="/signup" className="text-blue-700 hover:underline">
              Create account
            </Link>
          </div>

        </form>
      </div>
    </main>
  );
};

export default page;
