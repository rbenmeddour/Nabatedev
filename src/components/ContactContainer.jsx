import React from "react";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Modal from "./Modal";
import '../styles/contact.css'

const ContactContainer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="bg-gray-200">
      <div className="contactContainer">
        <h2 className="">
          Vous souhaitez en savoir plus sur nos produits ?
        </h2>
        <div className="">
          <div className="cardContainer">
            <div className="card">
              <StaticImage
                src="../../public/_gatsby/_image/Images/call.png"
                alt="Image 2"
                placeholder="blurred"
                className="staticImg"
              />
              <h3 className="text-lg font-bold mb-2">Par téléphone</h3>
              <p className="mb-4">Monday to Friday, 9am to 4pm PST</p>
              <h4 className="text-md font-bold mb-2">
                North American Toll-Free:
              </h4>
              <p className="mb-4">1-877-930-7438</p>
              <p className="mb-2">International:</p>
              <p>1-877-930-7438</p>
            </div>
            <div className="card">
              <StaticImage
                src="../../public/_gatsby/_image/Images/folder.png"
                alt="Image 2"
                placeholder="blurred"
                className="staticImg"
              />
              <h3 className="text-lg font-bold mb-2">START A NEW CASE</h3>
              <p className="paragraph">
                Just send your question or concerns by starting a new case and
                we will give you the help you need
              </p>
              <br />
              <button
                onClick={togglePopup}
                className="bg-gray-300 border border-gray-400 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400 w-full"
              >
                Nous écrire
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && <Modal showPopup={showPopup} setShowPopup={setShowPopup} />}
    </div>
  );
};

export default ContactContainer;
