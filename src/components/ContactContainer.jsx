import React from "react";
import { useState } from "react";
import logoPhone from "../../public/_gatsby/_image/Images/call.png";
import logoMail from "../../public/_gatsby/_image/Images/folder.png";
import { StaticImage } from "gatsby-plugin-image";

const ContactContainer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log(showPopup);
  };

  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="max-w-md">
        <h2 className="text-center text-3xl font-bold py-10">
          We're here for you, don't hesitate
        </h2>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row w-full">
            <div className="bg-white shadow-md rounded-lg p-8 w-full mr-6 text-center">
              <StaticImage
                src="../../public/_gatsby/_image/Images/call.png"
                alt="Image 2"
                placeholder="blurred"
                className="mb-4"
              />
              <h3 className="text-lg font-bold mb-2">By Phone</h3>
              <p className="mb-4">Monday to Friday, 9am to 4pm PST</p>
              <h4 className="text-md font-bold mb-2">
                North American Toll-Free:
              </h4>
              <p className="mb-4">1-877-930-7438</p>
              <p className="mb-2">International:</p>
              <p>1-877-930-7438</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-8 w-full text-center">
              <StaticImage
                src="../../public/_gatsby/_image/Images/folder.png"
                alt="Image 2"
                placeholder="blurred"
                className="mb-4"
              />
              <h3 className="text-lg font-bold mb-2">START A NEW CASE</h3>
              <p>
                Just send your question or concerns by starting a new case and
                we will give you the help you need
              </p>
              <br />
              <button
                onClick={togglePopup}
                className="bg-gray-300 border border-gray-400 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400 w-full"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPopup ? (
        <div className="fixed top-0 left-0 h-screen w-full flex items-center justify-center z-50">
          <div className="absolute bg-gray-800 opacity-75 h-screen w-full z-10"></div>
          <div className="bg-white rounded-lg shadow-lg w-3/4 md:max-w-md mx-auto overflow-y-auto z-20 relative">
            <button
              className="absolute top-0 right-0 mt-4 mr-4"
              onClick={togglePopup}
            >
              <svg
                className="h-6 w-6 fill-current text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19.41 7.41L12 14.83l-7.41-7.42L3 9.83l9 9 9-9z" />
              </svg>
            </button>

            <div className="py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Contact form</p>
              </div>
              <form className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="pb-1 text-sm font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border-2 border-gray-300 p-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="pb-1 text-sm font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border-2 border-gray-300 p-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="pb-1 text-sm font-bold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="border-2 border-gray-300 p-2 rounded-lg"
                    rows="5"
                  ></textarea>
                </div>
                <button className="bg-gray-300 border border-gray-400 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400 w-full">
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ContactContainer;
