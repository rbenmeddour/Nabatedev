import React from "react";
import {useState} from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(formData);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="pb-1 text-sm font-bold">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
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
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
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
            value={formData.message}
            onChange={(event) =>
              setFormData({ ...formData, message: event.target.value })
            }
            id="message"
            className="border-2 border-gray-300 p-2 rounded-lg"
            rows="5"
          ></textarea>
        </div>
        <button className="bg-gray-300 border border-gray-400 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400 w-full">
          SEND
        </button>
      </form>
    </>
  );
};

export default Form;
