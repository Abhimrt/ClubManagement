"use client";
import { useAuth } from "@/context/AuthContext";
import React from "react";
import { FaCheck, FaExclamation } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function ImageDes({ show, text, setShow }) {
  return (
    <>
      {show && (
        <>
          <div
            className="AletContainer center p-10  "
            style={{width:"80vw",height:"80vh"}}
            data-aos="flip-up"
            data-aos-delay="0"
          >
            {/* <div
              className="AlertUpper center"
              data-aos="slide-down"
              data-aos-delay="250"
            >
              <div data-aos="zoom-in" data-aos-delay="800">
                {warnAlert !== 1 && warnAlert !== 2 && (
                
                  <FaCheck className="text-5xl text-green-800"/>
                )}
                {warnAlert === 2 && (
                 <FaExclamation className="text-5xl text-yellow-800"/>
                )}
                {warnAlert === 1 && (
                  <FaXmark className="text-5xl text-red-800"/>
                )}
              </div>
            </div> */}
            <div className="AlertBottom overflow-y-scroll">
              <div>
                <div className="max-w-full mx-auto  p-6 rounded-lg shadow-md">
                  <h1 className="text-2xl font-semibold mb-4">
                    Sharable Link of Photo from Google Drive
                  </h1>

                  {/* Step 1: Upload your photo */}
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">
                      Step 1: Upload Your Photo
                    </h2>
                    <p>
                      First, upload your photo to Google Drive if it's not
                      already there.
                    </p>
                    <img
                      src="/images/upload.png"
                      alt="Upload your photo"
                      className="mt-4 shadow-lg rounded-lg"
                    />
                  </div>

                  {/* Step 2: Get shareable link */}
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">
                      Step 2: Get Shareable Link
                    </h2>
                    <p>
                      Right-click on the photo in Google Drive, select "Get
                      Shareable Link," and make sure the sharing settings are
                      set to "Anyone with the link can view."
                    </p>
                    <img
                      src="/images/share.png"
                      alt="Get shareable link"
                      className="mt-4 shadow-lg rounded-lg"
                    />
                    <img
                      src="/images/access.png"
                      alt="Get shareable link"
                      className="mt-4 shadow-lg rounded-lg"
                    />
                  </div>

                  {/* Step 3: Share the link */}
                  <div>
                    <h2 className="text-lg font-semibold mb-2">
                      Step 3: Share the Link
                    </h2>
                    <p>
                      Copy the link and paste it in the input field.
                    </p>
                    <img
                      src="/images/copy.png"
                      alt="Copy shareable link"
                      className="mt-4 shadow-lg rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <button
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={() => setShow(false)}
              >
                ✓ OK!!
              </button>
            </div>
          </div>
          <div className="AlertBack" onClick={() => setShow(false)}></div>
        </>
      )}
    </>
  );
}

//to ue

// // for image description
//   const [showDes,setshowDes] = useState(true);
