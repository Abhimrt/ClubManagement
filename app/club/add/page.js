"use client";
import React, { useEffect, useState } from "react";
import { NewPost } from "@/Data/Form";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import ImageDes from "@/components/ImageDes";

const page = () => {
  const { clubData, setEventData, setLoading, alertN } = useAuth();
  const router = useRouter();

  // for image description
  const [showDes,setshowDes] = useState(false);


  const [headings, setheadings] = useState({
    name: "",
    photo: "",
  });
  // const [info, setinfo] = useState({
  //   eventName:"",
  //   image:"",
  //   date:"",
  //   time:"",
  //   location:"",
  //   contact:"",
  //   mode:"",
  //   link:""
  // })

  useEffect(() => {
    // Means the user is the club authorized or not
    if (clubData) {
      setheadings({
        name: clubData.clubName,
        photo: clubData.photoURL,
      });
    } else {
      router.push("/");
    }
  }, [clubData]);

  const submit = async (e) => {
    // checking that the given link is valid or not
    let id = e.image.value.split("/").at(-2);
    if (id === undefined) {
      alertN("Enter a valid Image link", 2);
      e.image.value = "";
      return;
    }

    // fetching data from the document
    let data = {
      name: e.name.value,
      image: `https://drive.google.com/uc?id=${id}`,
      date: e.date.value,
      time: e.time.value,
      location: e.location.value,
      contact: e.contact.value,
      details: e.details.value.split("\n").join("<br/>"),
      mode: e.mode.value,
      link: e.link.value,
    };

    // promises for the data setting
    try {
      setLoading(true);
      await setEventData(data); //api calling
      setLoading(false);
      alertN("Event added successfully", 3);
      router.push("/"); // after successfully setting the data it redirects to the main page
    } catch (err) {
      setLoading(false);
      console.log(err);
      alertN(err.message, 1);
    }
  };

  return (
    <>
      {/* upper div for the club name and image */}
      <div
        className="my-4 flex items-center m-auto w-fit flex-wrap justify-center"
        title="CXI"
      >
        {headings.photo && (
          <img
            className="rounded-full border border-gray-400 border-2 aspect-square"
            src={headings.photo}
            alt=""
            width={60}
            height={60}
          />
        )}
        <div className="mx-2 font-medium text-lg sm:text-xl  text-gray-900">
          {headings.name}
        </div>
        <span>New Post</span>
      </div>
      {/* upper div close */}

      {/* form start */}
      <form
        className="flex flex-wrap w-screen justify-start sm:justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          submit(e.target);
        }}
      >
        {/* all input fields */}
        {NewPost.map((e, i) => (
          <FormPart
            name={e.name}
            placeH={e.placeH}
            type={e.type}
            key={i}
            title={e.title}
            min={e.min ? `${e.min}` : ""}
            max={e.max ? `${e.max}` : ""}
            setshowDes = {setshowDes}
          />
        ))}

        {/* text area */}
        <div className=" w-[90vw] sm:w-[93vw] m-4  center overflow-visible">
          <label
            htmlFor="details"
            className="block m-2 p-2 text-md font-medium text-gray-900 whitespace-nowrap "
          >
            Description<span className="text-red-600 text-xl">*</span>
          </label>
          <textarea
            name={"details"}
            id={"details"}
            className="bg-gray-50 border h-32 border-gray-300 text-gray-900 text-sm rounded-lg block grow p-2.5 shadow-lg "
            placeholder={"Detail about the event"}
            required
          />
        </div>

        {/* button to submit the data */}
        <button
          type="submit"
          className="m-4 px-28 text-white bg-blue-500 shadow-md hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center "
        >
          Add Event
        </button>
      </form>
      {/* form end */}

      <ImageDes show={showDes} setShow={setshowDes} />
    </>
  );
};

// this is returning the different inputs as in the data
const FormPart = ({ name, placeH, type, title, min, max,setshowDes }) => {
  return (
    <>
        <div className="min-w-[45vw] m-4 center flex-col  overflow-visible">
     <div className="center w-full">
     <label
        htmlFor={name}
        className="block m-2 p-2 text-md font-medium text-gray-900 whitespace-nowrap "
      >
        {title}
        <span className="text-red-600 text-xl">*</span>
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block grow p-2.5 shadow-md "
        placeholder={placeH}
        min={min}
        max={max}
        required
      />
     </div>
      {name === 'image' && <span className="text-gray-500 text-sm">Enter a sharable drive link <span className="text-blue-700 cursor-pointer" onClick={()=>setshowDes(true)}>Know More</span></span>}
    </div>
    </>
  );
};

export default page;
