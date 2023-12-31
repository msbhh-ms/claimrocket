"use client";
import { FaSkype } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import React, { useState } from "react";

function ContactUS() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      <div id="login" className="bg-black pt-40 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center py-3">
            <h2 className="text-[35px] md:text-[45px] text-white">
              Get In Touch
            </h2>
            <h2 className="text-[22px] text-white">
              Have a Question? Send Us a Message
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-12 md:mx-4 bg-[#1c1c1c]">
                <div className="md:mx-4 p-5 md:p-10">
                  <div>
                    <div className="py-3">
                      <label
                        htmlFor="name"
                        className="text-[#757575] text-[20px]"
                      >
                        Name
                      </label>
                      <input
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        required
                        className="py-4 border-1 border-[#757575] border focus:outline-none focus:border-[#E02B20] w-full bg-[#1c1c1c] text-white text-[18px] px-2"
                      />
                    </div>
                    <div className="py-3">
                      <label
                        htmlFor="email"
                        className="text-[#757575] text-[20px]"
                      >
                        Email
                      </label>
                      <input
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        required
                        className="py-4 border-1 border-[#757575] border w-full focus:outline-none focus:border-[#E02B20] bg-[#1c1c1c] text-white text-[18px] px-2"
                      />
                    </div>
                    <div className="py-3">
                      <label
                        htmlFor="subject"
                        className="text-[#757575] text-[20px]"
                      >
                        Subject
                      </label>
                      <input
                        value={formData.subject}
                        onChange={handleChange}
                        type="text"
                        name="subject"
                        required
                        className="py-4 border-1 border-[#757575] focus:outline-none focus:border-[#E02B20] border w-full bg-[#1c1c1c] text-white text-[18px] px-2"
                      />
                    </div>
                    <div className="py-3">
                      <label
                        htmlFor="message"
                        className="text-[#757575] text-[20px]"
                      >
                        Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={handleChange}
                        name="message"
                        className="py-4 border-1 border-[#757575] focus:outline-none focus:border-[#E02B20] border w-full bg-[#1c1c1c] text-white text-[18px] px-2"
                        cols="30"
                        rows="8"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <button
                        className="bg-[#E02B20] text-white px-6 py-2 hover:scale-105 duration-300"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUS;
