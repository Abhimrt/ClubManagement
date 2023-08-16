"use client";
import React from "react";
import { NewPost } from "@/Data/Form";
import Image from "next/image";

const page = () => {
  {
    const a =
      "https://drive.google.com/file/d/1SQ7ttMeU76uCBGJCOHS9VKOkhg5A5sxw/view?usp=sharing";
    const output = `https://drive.google.com/uc?id=${a.split("/").at(-2)}`;
    // console.log(output);
    // https://drive.google.com/uc?id=1SQ7ttMeU76uCBGJCOHS9VKOkhg5A5sxw
  }

  const submit = (e) => {
    let id = e.image.value.split("/").at(-2);
    if (id === undefined) {
      alert("Enter a valid Image link");
      e.image.value = "";
      return;
    }
    let data = {
      name: e.name.value,
      image: `https://drive.google.com/uc?id=${id}`,
      date: e.date.value,
      time: e.time.value,
      location: e.location.value,
      contact: e.contact.value,
      details: e.details.value,
    };

    console.log(data);
  };

  return (
    <>
      <div
        className="my-4 flex items-center m-auto w-fit flex-wrap justify-center"
        title="CXI"
      >
        <Image
          className="rounded-full border-2"
          src="/images/user.jpeg"
          alt=""
          width={60}
          height={60}
        />
        <a
          href="#"
          className="mx-2 font-medium text-lg sm:text-xl  text-gray-900"
        >
          COLLABORATION x INNOVATION
        </a>
        <span>New Post</span>
      </div>
      <form
        className="flex flex-wrap w-screen justify-start sm:justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          submit(e.target);
        }}
      >
        {NewPost.map((e, i) => (
          <FormPart
            name={e.name}
            placeH={e.placeH}
            type={e.type}
            key={i}
            title={e.title}
            min={e.min ? `${e.min}` : ""}
            max={e.max ? `${e.max}` : ""}
          />
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
        <button
          type="submit"
          className="m-4 px-28 text-white bg-blue-500 shadow-md hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center "
        >
          Add Event
        </button>
      
      </form>
    </>
  );
};

const FormPart = ({ name, placeH, type, title, min, max }) => {
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
        max={max}
        required
      />
    </div>
  );
};

export default page;
