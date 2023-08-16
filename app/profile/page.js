import Hr from "@/components/Hr";
import Post from "@/components/Post";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div
        className="my-4 sm:my-6 flex items-center m-auto w-fit flex-wrap justify-center"
        title="CXI"
      >
        <Image
          className="rounded-full border-2 shadow-md m-1"
          src="/images/user.jpeg"
          alt=""
          width={150}
          height={150}
        />
        <a
          href="#"
          className="m-4 font-medium text-xl sm:text-4xl overflow-hidden  text-gray-900"
        >
          COLLABORATION x INNOVATION
        </a>
      </div>
      {/* about section */}
      <div className="flex justify-center  items-center flex-col sm:flex-row sm:mx-10">
        <div className="m-4 w-[92vw] sm:w-1/2 bg-white rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-medium underline underline-offset-4 decoration-gray-400 mb-2">
            About Us
          </h3>
          <p className="text-gray-500 ml-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, sit. Nesciunt aliquam eius non at. Earum, et
            facilis! Sapiente perferendis molestias, eligendi consectetur
            reprehenderit cum porro aspernatur praesentium ipsum velit. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Corporis nobis
            delectus aperiam laudantium a sapiente ad. Ut fuga temporibus
            asperiores fugiat, iusto nostrum, quis incidunt nihil deleniti,
            veniam blanditiis pariatur.
          </p>
        </div>
        <div className="m-4 w-[92vw] sm:w-1/2 self-stretch bg-white rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-medium underline underline-offset-4 decoration-gray-400 mb-2">
            Conatact Us
          </h3>
          <table className="text-left ml-2 profile-table">
            <tbody>
              <tr>
                <th>Email </th>
                <td>: cxi@miet.ac.in</td>
              </tr>
              <tr>
                <th>Contact </th>
                <td>: 9927245142</td>
              </tr>
              <tr>
                <th>Website </th>
                <a href="https://cxi-miet.github.io/" target="_blank">
                  <td>: cxi-miet.github.io</td>
                </a>
              </tr>
              <tr>
                <th>Instagram </th>
                <a href="https://cxi-miet.github.io/" target="_blank">
                  <td>: cxi-miet.github.io</td>
                </a>
              </tr>
              <tr>
                <th>Facebook </th>
                <a href="https://cxi-miet.github.io/" target="_blank">
                  <td>: cxi-miet.github.io</td>
                </a>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* post of the club */}
      <main className="center min-h-screen w-screen flex-col p-5 ">
        <Hr />
        <Post />
        <Post />
        <Post />
      </main>
    </div>
  );
};

export default page;
