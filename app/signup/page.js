"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
// data to be shown on the screen
import { signup as renderData } from "@/Data/signup";
import Alert from "@/components/Alert";
import Inputdiv from "@/components/Inputdiv";

const page = () => {

  const { signup, alertN, setLoading } = useAuth(); // api for signup
  const router = useRouter();

  // function execute when form is submitted
  const handleSignup = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    let Cpassword = e.target.Cpassword.value;

    // checking that the mail is of miet or not
    // if (!email.endsWith("miet.ac.in")) {
    //   alertN("Enter official collage mail id", 2);
    // }

    // checking that both password is same or not
    if (password !== Cpassword) {
      alertN("Password doesn't match", 1)
      e.target.password.value = "";
      e.target.Cpassword.value = "";
      return;
    }

    // checking for the velidation of the password
    var validation =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!password.match(validation)) {
      alertN(
        "A password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character", 2
      );
      e.target.password.value = "";
      e.target.Cpassword.value = "";
      return;
    }

    // calling function it gives promises
    try {
      setLoading(true)
      await signup(email, password);
      setLoading(false)
      // if user created successfully then we navigate towards verification page
      router.push("/signup/verification");
    } catch (err) {
      setLoading(false)
      console.log(err);
      alertN(err.message, 1);
    }
  };

  return (
    <main className="center h-screen w-screen">
      {/* outer div start */}
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8">
        <form className="space-y-6" onSubmit={(e) => handleSignup(e)}>
          {/* heading */}
          <h5 className="text-xl font-medium text-gray-900">
            Sign Up to our platform
          </h5>
          {/* input field div  */}
          <Inputdiv data={renderData} />
          {/* input field div end */}

          {/* button */}
          <button
            type="submit"
            // onClick={Signup}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Sign Up
          </button>

          <div className="text-sm font-medium text-gray-500">
            Already registered?{" "}
            <Link href="/login" className="text-blue-700 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
      {/* outer div end */}
      {/* alert box */}
      {/* <Alert show={showAlert} setShow={setshowAlert} text={textAlert} warn={warnAlert} /> */}
    </main>
  );
};

export default page;
