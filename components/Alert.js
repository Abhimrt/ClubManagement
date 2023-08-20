"use client"
import { useAuth } from "@/context/AuthContext";
import React from "react";
import {FaCheck, FaExclamation} from "react-icons/fa"
import {FaXmark} from "react-icons/fa6"

export default function Alert(props) {

  const {showAlert, setshowAlert, textAlert, warnAlert} = useAuth()

  return (
    <>
      {showAlert && (
        <>
          <div
            className="AletContainer center p-10"
            data-aos="flip-up"
            data-aos-delay="0"
          >
            <div
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
            </div>
            <div className="AlertBottom">
              <h3>{textAlert}</h3>
            </div>
            <div className="AlertClose">
              <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={() => setshowAlert(false)}>
               ✓ OK!!
              </button>
            </div>
          </div>
          <div className="AlertBack" onClick={() => setshowAlert(false)}></div>
        </>
      )}
    </>
  );
}

//to ue
// Alert start
//
// const [showAlert, setshowAlert] = useState(false);
// const [textAlert, settextAlert] = useState("");
// const [warnAlert, setwarnAlert] = useState();
//
//<Alert show={showAlert} setShow={setshowAlert} text={textAlert} warnAlert={warnAlert} />

//1 -> wrong
//2->warning
//3->ok
//
// Alert end