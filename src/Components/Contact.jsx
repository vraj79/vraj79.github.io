import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div
      name="Contact"
      className="grid justify-center items-center bg-gradient-to-b from-gray-800 to-black text-center text-white"
    >
      <section id="contact">
        <div className="contact container">
          <div>
            <h1 className="text-4xl text-center font-bold border-b-4 border-gray-500 p-2 mt-7">
              Contact Info
            </h1>
          </div>
          <div className="contact-items">
            <div className="contact-item hover:animate-ping">
              <div className="icon">
                <img
                  className="rounded-full hover:animate-spin"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5AakAw4Uo64RyV28rLPKmclJvFiSqJkURQ&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="contact-info">
                <h1 className="text-xl my-1">Phone</h1>
                <h2>+91 7903467310</h2>
                <h2>+91 7992375033</h2>
              </div>
            </div>
            <div className="contact-item hover:animate-ping">
              <div className="icon">
                <img
                  className="rounded-full hover:animate-spin"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMN0I_hI-UJV4DPVCbNWHaCYHxivy4q6Y7jA&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="contact-info">
                <h1 className="text-xl my-1">Email</h1>
                <h2>vishal.raj8546@gmail.com</h2>
                <h2>vishal.kumar4856@gmail.com</h2>
              </div>
            </div>
            <div className="contact-item hover:animate-ping">
              <div className="icon">
                <img
                  className="rounded-full hover:animate-spin"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKR8hB0ygC04CA_O8gLArqbl_scLKyXQ965w&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="contact-info">
                <h1 className="text-xl my-1">Address</h1>
                <h2>Near Medical College</h2>
                <h2>Gaya,Bihar</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="py-6 text-3xl text-center">
              Submit the form below to get in touch with me
            </p>
          </div>

          <div className="flex justify-center items-center ">
            <form
              action="https://getform.io/f/3e5893b1-6c38-45e4-95ab-9c7d16b989da"
              method="POST"
              className=" flex flex-col w-1/2 md:w-1/2"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <input
                type="text"
                name="email"
                required
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <textarea
                name="message"
                required
                placeholder="Enter your message"
                rows="5"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              />

              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Send Message
              </button>
            </form>
          </div>
          <a href="https://github.com/vraj79" className="text-xl">© 2023 Designed and Built by Vishal Raj</a>
        </div>
      </div>
    </div>
  );
};
