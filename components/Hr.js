import React from "react";

const Hr = ({text}) => {
  return (
    <div className="w-[85vw] sm:w-[60vw] lg:w-[50vw] xl:w-[40vw] center">
      <hr className="w-1/5 h-[1.5px] my-8 bg-gray-400 border-0 " />
      <p className=" px-3 font-medium text-xl text-blue-600 mx-1">{text?text:"Our Running Events"}</p>
      <hr className="w-1/5 h-[1.5px] my-8 bg-gray-400 border-0 " />
    </div>
  );
};

export default Hr;
