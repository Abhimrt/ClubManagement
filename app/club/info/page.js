"use client";
import ImageDes from "@/components/ImageDes";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { clubData, setUserData, updateUserData, fetchClub, setLoading, alertN } = useAuth();
  
  // for image description
  const [showDes,setshowDes] = useState(false);

  const [info, setinfo] = useState({
    clubName: "",
    photoURL: "",
    official: {
      name: "",
      phone: "",
      email: "",
      position: "",
    },
    social: {
      facebook: "",
      linkedin: "",
      instagram: "",
      website: "",
    },
  });


  useEffect(() => {
    // setting the details of the club that is in the database
    if (clubData) {
      setinfo({
        clubName: clubData.clubName,
        photoURL: clubData.photoURL,
        official: clubData.official,
        social: clubData.social,
      });
    }

  }, [clubData]);

  // this function will call when you click the submit button
  const handleUpdate = async (e) => {
    e.preventDefault();

    // checking the user passkey 
    if (e.target.passkey.value !== "2008as23#") {
      alertN(
        "Passkey is not correct please recheck. If you were facing same problem them you can contact us",1
      );
      return;
    }

    // cloning the info in data so that we can perform different operation easily
    let data = info

    // fot the preexisting photo
    if (!info.photoURL.startsWith("https://drive.google.com/uc?id=")) {
      data = {
        ...info, photoURL: `https://drive.google.com/uc?id=${e.target.photo.value
          .split("/")
          .at(-2)}`
      }
    }

    //  updating the time on which the data is updating
    data = {...data,updatedTime:new Date()}
  
    // apis running 
    try {
      setLoading(true)

      // if there was data is database then we use to update it
      if (clubData) {
        console.log("updating data");
        await updateUserData(data);
      } else { // if ther is no data in data base we have to set it
        console.log("setting data");
        await setUserData(data);
      }

      // fetching the data that is recently updated in the data base
      fetchClub();

      setLoading(false)

      alertN("Data updated successfully",3);
    } catch (err) {
      setLoading(false)
      console.log(err);
      alertN(err,message,1);
    }
  };

  return (
    <main className="center min-h-[80vh] w-screen">
      <div className="w-[80vw]  p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8">
        <form
          className="center flex-col w-full"
          onSubmit={(e) => handleUpdate(e)}
        >
          <h5 className="text-xl font-medium text-gray-900 mb-5">
            Enter your Club details
          </h5>
          {/* one row contains 2 column or we can say 2 input box inside it */}
          {/* one row start +++ */}
          <div className="center flex-col sm:flex-row  w-full">
            <div className="m-5 w-full sm:w-1/2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Club Name <span className="text-red-600 text-xl">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                placeholder="Abhishek Singhal"
                value={info.clubName}
                onChange={(e) => setinfo({ ...info, clubName: e.target.value })}
                required
              />
            </div>
            <div className=" m-5 w-full sm:w-1/2">
              <label
                htmlFor="photo"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Photo <span className="text-red-600 text-xl">*</span>
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="https://drive.google.com/file/d/1SQ7ttMeU76Okhg5A5sxw/view?usp=sharing"
                value={info.photoURL}
                onChange={(e) => {
                  setinfo({ ...info, photoURL: e.target.value });
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            <span className="text-gray-500 text-sm">Enter a sharable drive link <span className="text-blue-700 cursor-pointer" onClick={()=>setshowDes(true)}>Know More</span></span>
            </div>

          </div>
          {/* one row end ---- */}

          {/* it was a box which contain the data for officials only */}
          {/* official  start*/}
          {/* name */}
          <h5 className="font-medium">Official</h5>
          <div className="border border-gray-400 p-2 w-11/12 rounded-xl mb-2">
            {/* one row start +++ */}
            <div className="center flex-col sm:flex-row  w-full scale-90">
              <div className="m-5 w-full sm:w-1/2">
                <label
                  htmlFor="nameo1"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  type="text"
                  name="nameo1"
                  id="nameo1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="Abhishek Singhal"
                  value={info.official.name}
                  onChange={(e) =>
                    setinfo({
                      ...info,
                      official: { ...info.official, name: e.target.value },
                    })
                  }
                  required
                />
              </div>
              <div className="m-5 w-full sm:w-1/2">
                <label
                  htmlFor="phoneo1"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Phone no. <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  type="number"
                  name="phoneo1"
                  id="phoneo1"
                  placeholder="9924XXXXXX"
                  min={1000000000}
                  max={9999999999}
                  value={info.official.phone}
                  onChange={(e) =>
                    setinfo({
                      ...info,
                      official: { ...info.official, phone: e.target.value },
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
            </div>
            {/* one row end ---- */}
            {/* one row start +++ */}
            <div className="center flex-col sm:flex-row  w-full scale-90">
              <div className=" w-full sm:w-1/2">
                <label
                  htmlFor="emailo1"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  email <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  type="email"
                  name="emailo1"
                  id="emailo1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="xyz@miet.ac.in"
                  value={info.official.email}
                  onChange={(e) =>
                    setinfo({
                      ...info,
                      official: { ...info.official, email: e.target.value },
                    })
                  }
                  required
                />
              </div>
              <div className="m-5 w-full sm:w-1/2">
                <label
                  htmlFor="position01"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Position <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  type="text"
                  name="positiono1"
                  id="positiono1"
                  placeholder="Secretory"
                  value={info.official.position}
                  onChange={(e) =>
                    setinfo({
                      ...info,
                      official: { ...info.official, position: e.target.value },
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
            </div>
            {/* one row end ---- */}
          </div>
          {/* officila end */}

          {/* it was a box which contain the data for social only */}
          {/* social  start*/}
          {/* name */}
          <h5 className="font-medium">Social media</h5>
          <div className="border border-gray-400 p-2 w-11/12 rounded-xl mb-2">
            {/* one row start +++ */}
            <div className="center flex-col sm:flex-row  w-full scale-90">
              <div className="m-5 w-full sm:w-1/2">
                <label
                  htmlFor="facebook"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Facebook
                </label>
                <input
                  type="text"
                  name="facebook"
                  id="facebook"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="Link"
                  value={info.social.facebook}
                  onChange={(e) =>
                    setinfo({
                      ...info,
                      social: { ...info.social, facebook: e.target.value },
                    })
                  }
                />
              </div>
              <div className="m-5 w-full sm:w-1/2">
                <label
                  htmlFor="linkedin"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Linked In
                </label>
                <input
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  placeholder="link"
                  value={info.social.linkedin}
                  onChange={(e) =>
                    setinfo({
                      ...info,
                      social: { ...info.social, linkedin: e.target.value },
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
            </div>
            {/* one row end ---- */}
            {/* one row start +++ */}
            <div className="center flex-col sm:flex-row  w-full scale-90">
              <div className=" w-full sm:w-1/2">
                <label
                  htmlFor="instagram"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Instagram
                </label>
                <input
                  type="text"
                  name="instagram"
                  id="instagram"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="link"
                  value={info.social.instagram}
                  onChange={(e) =>
                    setinfo({
                      ...info,
                      social: { ...info.social, instagram: e.target.value },
                    })
                  }
                />
              </div>
              <div className="m-5 w-full sm:w-1/2">
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Website
                </label>
                <input
                  type="text"
                  name="website"
                  id="website"
                  placeholder="link"
                  value={info.social.website}
                  onChange={(e) =>
                    setinfo({
                      ...info,
                      social: { ...info.social, website: e.target.value },
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
            </div>
            {/* one row end ---- */}
          </div>
          {/* social end */}

          {/* passkey input box */}
          <div className="m-5 w-full sm:w-1/2">
            <label
              htmlFor="passkey"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Passkey <span className="text-red-600 text-xl">*</span>
            </label>
            <input
              type="text"
              name="passkey"
              id="passkey"
              placeholder="2014as52$"
              // value={info.photoURL}
              // onChange={(e) => setinfo({ ...info, photoURL: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
            <span className="text-gray-600 text-sm">
              Given through the mail. If didn't have{" "}
              <Link
                href={"/contact"}
                className="text-blue-600 hover:text-blue-900"
              >
                contact us
              </Link>
              .
            </span>
          </div>

          {/* button */}
          <button
            type="submit"
            className="w-full max-w-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Update details
          </button>
          
        </form>
      </div>
      <ImageDes show = {showDes} setShow = {setshowDes}/>
    </main>
  );
};

export default page;
