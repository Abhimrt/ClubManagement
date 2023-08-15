import React from "react";
import { NewPost } from "@/Data/Form";

const page = () => {

    // window.document.getElementById("date").min = new Date().getFullYear() + "-" +  parseInt(new Date().getMonth() + 1 ) + "-" + new Date().getDate()

  return (
    <>
      <div className="flex flex-wrap w-screen justify-start sm:justify-center items-center">
        {NewPost.map((e, i) => (
          <FormPart name={e.name} placeH={e.placeH} type={e.type} key={i} title={e.title} min={e.min?`${e.min}`:""} />
        ))}
        <div className=" w-[90vw] sm:w-[93vw] m-4  center overflow-visible">
      <label
        htmlFor="details"
        className="block m-2 p-2 text-md font-medium text-gray-900 whitespace-nowrap "
      >
        Description
      </label>
      <textarea
        name={"details"}
        id={"details"}
        className="bg-gray-50 border h-32 border-gray-300 text-gray-900 text-sm rounded-lg block grow p-2.5 shadow-lg "
        placeholder={"Detail about the event"}
        required
        
      />
    </div>
    <button type="submit"  className="m-4 px-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center ">Add Event</button>
      </div>

    </>
  );
};

const FormPart = ({ name, placeH, type ,title, min}) => {
    console.log(min)
  return (
    <div className="min-w-[45vw] m-4  center overflow-visible">
      <label
        htmlFor={name}
        className="block m-2 p-2 text-md font-medium text-gray-900 whitespace-nowrap "
      >
        {title}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block grow p-2.5 shadow-md "
        placeholder={placeH}
        min={min}
        required
      />
    </div>
  );
};

export default page;
