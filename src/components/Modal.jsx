import React from "react";
import Form from "./Form";
import { useState } from "react";

const Modal = ({ showPopup, setShowPopup }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const closeModal = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup ? (
        <div className="fixed top-0 left-0 h-screen w-full flex items-center justify-center z-50">
          <div
            className="absolute bg-gray-800 opacity-75 h-screen w-full z-10"
            onClick={() => setShowPopup(false)}
          ></div>

          <div className="bg-white rounded-lg shadow-lg w-3/4 md:max-w-md mx-auto overflow-y-auto z-20 relative">
            <button
              className="absolute top-0 right-0 mt-4 mr-4"
              onClick={closeModal}
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

              {isSubmitted ? (
                <div>Votre formulaire a été soumis avec succès!</div>
              ) : (
                <Form
                  isSubmitted={isSubmitted}
                  setIsSubmitted={setIsSubmitted}
                />
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
