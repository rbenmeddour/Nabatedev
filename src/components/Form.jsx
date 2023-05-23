import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ togglePopup }) => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

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
        toast.success("Vôtre message a été envoyé, merci.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1 className="text-center p-5 m-5">Nous Contacter</h1>
      <form ref={form} onSubmit={sendEmail} className="w-3/5 mx-auto space-y-4">
        <div className="flex space-x-4">
          <div class="w-full">
            <label
              htmlFor="name"
              className="block font-medium mb-2 text-center"
            >
              Nom
            </label>
            <input
              id="name"
              type="text"
              name="user_name"
              placeholder="Nom"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div class="w-full">
            <label
              htmlFor="phone"
              className="block font-medium mb-2 text-center"
            >
              Téléphone
            </label>
            <input
              id="phone"
              type="tel"
              name="user_phone"
              placeholder="N° de téléphone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-2 text-center">
            Votre adresse email
          </label>
          <input
            id="email"
            type="email"
            name="user_email"
            placeholder="Adresse mail"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="text" className="block font-medium mb-2 text-center">
            Nous écrire
          </label>
          <textarea
            id="text"
            name="message"
            placeholder="Votre message"
            className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
            required
          ></textarea>
        </div>
        <div>
          <input
            type="submit"
            value="Envoyer"
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
          />
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
