import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const SocialLinks = () => {
  return (
    <div className="mt-3">
      <ul className="flex items-center justify-center gap-2">
        <li
          className={
            "flex rounded-md justify-between items-center w-max animate-pulse bg-gray-500 hover:bg-blue-600 h-12 px-3 "
          }
        >
          <a
            href={"https://www.linkedin.com/in/vishal-r-4153b7133/"}
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li
          className={
            "rounded-md flex justify-between items-center w-max h-12 px-3 animate-pulse bg-gray-500 hover:bg-black"
          }
        >
          <a
            href={"https://github.com/vraj79"}
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li
          className={
            "rounded-md flex justify-between items-center w-max h-12 px-3 bg-gray-500 animate-pulse hover:bg-red-500 cursor-pointer"
          }
        >
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FiMail size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};
