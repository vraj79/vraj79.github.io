import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          
        </>
      ),
      href: "https://linkedin.com",
      style: "",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/theyashpatel",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "visha.kumar4856@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              "rounded-tr-md"
            }
            style={{backgroundColor:"#0a66c2"}}
          >
            <a
              href={"https://www.linkedin.com/in/vishal-r-4153b7133/"}
              className="flex justify-between items-center w-full text-white"
            //   download={download}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin  size={30} />
            </a>
          </li>
          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              "rounded-tr-md"
            }
            style={{backgroundColor:"white"}}
          >
            <a
              href={"https://github.com/vraj79"}
              className="flex justify-between items-center w-full text-black"
            //   download={download}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithub style={{backgroundColor:"white"}}  size={30} />
            </a>
          </li><li
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 hover:bg-red-500" +
              " " +
              "rounded-tr-md"
            }
          >
            <a
              href={"https://drive.google.com/file/d/1WkL8t-Zq-BKGhLzwzgp0_Z9F6NeeT1ph/view?usp=share_link"}
              className="flex justify-between items-center w-full text-white"
              download={true}
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        {/* ))} */}
      </ul>
    </div>
  );
};
