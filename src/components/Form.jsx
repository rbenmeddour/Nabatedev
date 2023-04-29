import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ togglePopup }) => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const params = {
      name: "walid",
      email: "email@hotmail.fr",
      message: "messageeeeeeeee",
    };

    const serviceID = process.env.GATSBY_SERVICE_ID;
    const templateID = process.env.GATSBY_TEMPLATE_ID;
    const publicKey = process.env.GATSBY_PUBLICKEY;

    try {
      const result = await emailjs.sendForm(
        `${serviceID}`,
        `${templateID}`,
        form.current,
        `${publicKey}`
      );

      if (result.status === 200) {
        toast.success("Message sent successfully!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="w-3/5 mx-auto">
        <label className="block font-medium mb-2">Name</label>
        <input
          type="text"
          name="user_name"
          className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-md"
        />
        <label className="block font-medium mb-2">Email</label>
        <input
          type="email"
          name="user_email"
          className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-md"
        />
        <label className="block font-medium mb-2">Message</label>
        <textarea
          name="message"
          className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-md"
        ></textarea>
        <input
          type="submit"
          value="Send"
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
        />
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
