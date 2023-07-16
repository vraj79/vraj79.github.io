import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
// import Resume from "../assets/Vishal_Raj_Resume.pdf"
const links = [
  {
    id: 1,
    link: "Home",
  },
  {
    id: 4,
    link: "About",
  },
  {
    id: 3,
    link: "Projects",
  },
  {
    id: 2,
    link: "Skills",
  },
  {
    id: 5,
    link: "Contact",
  },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [page, setPage] = useState("Home");

  return (
    <div className="flex z-10 cursor-pointer justify-between items-center w-full h-16 px-2 fixed bg-gray-600 text-white">
      <div>
        <Link
          onClick={() => setPage("Home")}
          to="Home"
          activeClass="active"
          duration={500}
          smooth
          sky="true"
        >
          <h1 className="text-5xl font-signature ml-2 mt-3">
            {" "}
            <span className="text-red-500">V</span>{" "}
          </h1>
        </Link>
      </div>
      <ul className="hidden md:flex">
        {links.map((ele) => (
          <li
            className="px-4 text-2xl hover:underline hover:text-red-500"
            style={{
              color: page === ele.link ? "red" : "",
              textDecoration: page === ele.link ? "underline" : "",
            }}
            key={ele.id}
          >
            <Link
              activeClass="active"
              spy
              to={ele.link}
              onClick={() => setPage(ele.link)}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {ele.link}
            </Link>
          </li>
        ))}
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1ylQfC-4EeZHabh7AUpPeAewIj2KW20Wv/view?usp=sharing"
            className="px-4 text-2xl hover:underline hover:text-red-600"
          >
            Resume
          </a>
        </li>
      </ul>
      <div onClick={() => setNav(!nav)} className="z-10 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-300 to-gray-500">
          {links.map((ele) => (
            <li
              className="p-4 text-4xl hover:underline hover:text-red-600"
              key={ele.id}
            >
              <Link
                onClick={() => setNav(!nav)}
                smooth={true}
                offset={-50}
                duration={500}
                to={ele.link}
                activeClass="active"
              >
                {ele.link}
              </Link>
            </li>
          ))}
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1WkL8t-Zq-BKGhLzwzgp0_Z9F6NeeT1ph/view?usp=share_link"
              className="p-4 text-4xl hover:underline hover:text-red-600"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};
