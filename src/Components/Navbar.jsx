import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const links = [
  {
    id: 1,
    link: "Home"
  },
  {
    id: 2,
    link: "Skills"
  },
  {
    id: 3,
    link: "Projects"
  },
  {
    id: 4,
    link: "About"
  },
  {
    id: 5,
    link: "Contact"
  }
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex cursor-pointer justify-between items-center w-full h-20 px-4 fixed bg-gray-600 text-white">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          {" "}<span className="text-red-600">V</span>ishal{" "}
          {/* <span className="text-red-600">R</span>aj */}
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(ele =>
          <li
            className="px-4 text-2xl hover:underline hover:text-red-600"
            key={ele.id}
          >
            {ele.link}
          </li>
        )}
        <li><a download={true} href="../../public/Vishal_Raj_Resume.pdf" className="px-4 text-2xl hover:underline hover:text-red-600">Resume</a></li>
      </ul>
      <div onClick={() => setNav(!nav)} className="z-10 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav &&
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-300 to-gray-500">
          {links.map(ele =>
            <li
              className="p-4 text-4xl hover:underline hover:text-red-600"
              key={ele.id}
            >
              {ele.link}
            </li>
          )}
        </ul>}
    </div>
  );
};
