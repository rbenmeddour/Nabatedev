import React from "react";
import { useState } from "react";
import logoPhone from "../../public/_gatsby/_image/Images/call.png";
import logoMail from "../../public/_gatsby/_image/Images/folder.png";
import { StaticImage } from "gatsby-plugin-image";
import Modal from "./Modal";

const ContactContainer = () => {
  const [showPopup, setShowPopup] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const togglePopup = () => {
    setShowPopup(!showPopup);
    // console.log(showPopup);
  };

//   const handleSubmit =  (e)  => {
//     e.preventDefault()
//     try {
//         console.log(formData);

//     } catch (e) {
//         console.log(e);
//     }
//   }

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
      {showPopup && <Modal showPopup={showPopup} />}
    </div>
  );
};

export default ContactContainer;
