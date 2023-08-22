"use client";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hr from "./Hr";

const Post = ({ id }) => {
  const { events } = useAuth();
  // console.log(events)

  function tConv24(time24) {
    var ts = time24;
    var H = +ts.substr(0, 2);
    var h = H % 12 || 12;
    h = h < 10 ? "0" + h : h; // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
  }
//   console.log(events[1].date)
  const get = (i)=>{
    if(i>0)
        return events[i-1].date
    return ""
  }

  return (
    <>
        {!events ? <Hr text={"No Current Events"} /> : <Hr text={events[0].date}/>}
      {events &&
        events.map((e, i) => {
          if (id && e.uid !== id) return <></>;
          let heading = false;
          if ((i > 0) & (get(i) !== e.date)) {
            heading = true;
          }
          return (
            <div key={i} className="center flex-col">
              {heading && <Hr text={e.date} />}
              <div
                className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-lg my-5 hover:shadow-2xl duration-150"
                key={i}
              >
                <Image
                  className="rounded-t-lg h-full w-full"
                  src={e.image}
                  alt=""
                  width={400}
                  height={300}
                  priority="false"
                />
                <div className="p-5 ">
                  {/* club detais */}
                  <Link
                    href={`/club/${e.uid}`}
                    className="my-2 flex items-center"
                    title="CXI"
                  >
                    <Image
                      className="rounded-full border-2"
                      src={e.logo}
                      alt=""
                      width={60}
                      height={60}
                    />
                    <span className="mx-2 font-medium text-lg sm:text-xl  text-gray-900">
                      {e.clubName}
                    </span>
                  </Link>

                  {/* event name */}
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {e.name}{" "}
                  </h5>

                  {/* basic details of the evente */}
                  <>
                    <div className="flex flex-wrap justify-between items-center text-lg text-gray-900 my-2">
                      <p>
                        Date: <span className="text-blue-700">{e.date}</span>
                      </p>
                      <p className="mr-5">
                        Time:{" "}
                        <span className="text-blue-700">{tConv24(e.time)}</span>
                      </p>
                    </div>
                    <div className="flex flex-wrap justify-between items-center text-lg text-gray-900 my-2">
                      <p className="">
                        Mode: <span className="text-blue-700"> {e.mode}</span>
                      </p>
                      <p className="mr-5">
                        Registration:{" "}
                        <a href={e.link} className="text-blue-700">
                          {" "}
                          click me
                        </a>
                      </p>
                    </div>
                    <div className="flex flex-wrap justify-between items-center text-lg text-gray-900 my-2">
                      <p className="">
                        Location:{" "}
                        <span className="text-blue-700"> {e.location}</span>
                      </p>
                      <p className="mr-5">
                        Contact:{" "}
                        <span className="text-blue-700"> {e.contact}</span>
                      </p>
                    </div>
                  </>

                  {/* Description of the event */}
                  <p className="mb-3 font-normal text-gray-600">
                    {e.details.split("<br/>").map((para, ind) => (
                      <span key={ind}>
                        {para}
                        <br />
                      </span>
                    ))}{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      
    </>
  );
};

export default Post;
