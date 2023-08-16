import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewPost = () => {
  return (
    <div   className="my-2 flex items-center justify-between w-full max-w-xl">
      <Link href={"/profile"}>
      <Image
        className="rounded-full border-2 border-gray-300"
        src="/images/user.jpeg"
        alt=""
        width={60}
        height={60}
        title="Profile"
      />
      </Link>
      <Link href={"/add"} className="rounded-full p-3 text-lg border-2 flex-grow ml-2 bg-white border-gray-300 text-gray-600" title="Add new event">
          Add new event!!
      </Link>
    </div>
  );
};

export default NewPost;
