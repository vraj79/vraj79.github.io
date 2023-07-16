import React from "react";
import { SiNetlify } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

export const Project = () => {
  const Projects = [
    {
      id: 9,
      git: "https://github.com/vraj79/Ecommerce-clone---Ajeeb",
      net: "https://puzzled-culottes-dove.cyclic.app/",
      src: "https://i.ibb.co/ZB9gddM/Ecommerce.png",
      tech1: "MERN",
      tech2: "JAVASCRIPT",
      tech3: "SCSS",
      type: "A solo project executed in 15 days",
      desc:
        "It is one of the largest e-commerce stores in India that deals with a wide range of products for men, women, and kids."
    },
    {
      id: 10,
      git: "https://github.com/vraj79/junction_plus_clone",
      net: "https://junction-plus-clone.vercel.app/",
      src: "https://user-images.githubusercontent.com/108677306/221346026-b1050e5a-dbb2-46d7-97b7-e63c24babc00.PNG",
      tech1: "REACT",
      tech2: "JAVASCRIPT",
      tech3: "CHAKRA UI",
      type: "A solo project executed in 06 days",
      desc:
        "The Junction Plus is a web application which provides you the complete information related of Movies, TV-Shows at runtime."
    },
    {
      id: 7,
      git: "https://github.com/vraj79/paypal_frontend",
      net: "https://paypal-assignment.netlify.app/",
      src: "https://confluence.atlassian.com/jirasoftwareserver0819/files/1086415884/1086415903/1/1634640320410/kanban_active.png",
      tech1: "MERN",
      tech2: "JAVASCRIPT",
      tech3: "CSS",
      type: "A solo project executed in 01 days",
      desc:
        "Task planner is like JIRA Website which helps to plan, assign and show progress to users."
    },
    {
      id: 3,
      git:
        "https://github.com/vraj79/faithful-lock-5927",
      net: "https://dailyshope.netlify.app/",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ41nKm7ewQW1UbSIMBGOnEubRbnotMiuEdh6nuQtBWJhgssDChkaPJUZFWnXa8UfwCjg&usqp=CAU",
      tech1: "MERN",
      tech2: "JAVASCRIPT",
      tech3: "CSS",
      type: "A group project of 5 members executed in 06 days",
      desc:
        "Daily Objects is an E-Commerce Website which deals with the cases,covers & bags."
    },
    {
      id: 5,
      git: "https://github.com/vraj79/geekbuying-clone",
      net: "https://mygeekbuying.netlify.app/",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSytgrJw7H9mjNBoWVI22dQcWSp6L0bgbESQ&usqp=CAU",
      tech1: "REACT",
      tech2: "JAVASCRIPT",
      tech3: "CSS",
      type: "A group project of 2 members executed in 06 days",
      desc:
        "GeekBuying is an E-Commerce Website who deals with the smart gadgets for all."
    },
    {
      id: 6,
      git: "https://github.com/vraj79/app-i",
      net: "https://app-i.netlify.app/",
      src: "https://img.freepik.com/free-vector/template-banner-online-store-with-shopping-cart-with-purchases-boxes-delivery-from-supermarket-vector-illustration_548887-104.jpg?w=2000",
      tech1: "REACT",
      tech2: "JAVASCRIPT",
      tech3: "CSS",
      type: "A solo project executed in 06 days",
      desc:
        "Shpping app is an E-Commerce Website which deals with the clothes and electronics."
    },
    {
      id: 4,
      git:
        "https://github.com/Suraj2320/quickest-seashore-9367-Cultfit.in-Clone",
      net: "https://cultfit-aayan269.vercel.app/",
      src:
        "data:image/png;base64,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",
      tech1: "REACT",
      tech2: "JAVASCRIPT",
      tech3: "CSS",
      type: "A group project of 5 members executed in 06 days",
      desc:
        "CultFit make group workouts fun, daily food healthy & tasty and Mental fitness easy with yoga."
    },
    {
      id: 8,
      git: "https://github.com/vraj79/ts_opa",
      net: "https://evogym-opa.netlify.app/",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52wvmSHf14xY8yPObfL5WI9urQkJsKOPSFQ&usqp=CAU",
      tech1: "REACT",
      tech2: "TYPESCRIPT",
      tech3: "CSS",
      type: "A solo project executed in 02 days",
      desc:
        "Evogym is an Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes "
    },
    {
      id: 2,
      git: "https://github.com/shivshankar0965/dusty-jewel-3645",
      net: "https://magical-toffee-cdb307.netlify.app/",
      src:
        "data:image/jpeg;base64,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",
      tech1: "HTML",
      tech2: "CSS",
      tech3: "JAVASCRIPT",
      type: "A group project of 5 members executed in 06 days",
      desc:
        "Booking.com is a travel agency for lodging reservations & other travel products."
    },
    {
      id: 1,
      git: "https://github.com/vraj79/disgusting-grass-3237",
      net: "https://calm-kitten-f6d713.netlify.app/",
      src:
        "data:image/png;base64,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",
      tech1: "HTML",
      tech2: "CSS",
      tech3: "JAVASCRIPT",
      type: "A solo project executed in 06 days",
      desc: "Codecov provides metrics and insights into the results of tests through code coverage reports."
    }
  ];

  console.log(Projects.length)

  return (
    <div
      name="Projects"
      style={{ height: "max-content" }}
      className="bg-gradient-to-b from-gray-600 to-black text-center text-white lg:h-screen py-5 grid justify-center items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-3">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2">
            Projects
          </p>
          <p className="py-3">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 pb-10">
          {Projects.map(({ id, src, git, net, tech1, tech2, tech3, desc, type }) =>
            <div
              key={id}
              className="shadow-lg animate-round shadow-green-500 rounded-lg py-2"
            >
              <a target="_blank" rel="noreferrer" href={net}>
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 w-full h-64 "
                />
              </a>
              <p className="text-lg mt-1">Tech Stack :</p>
              <p className="text-md my-1 font-semibold animate-bounce border w-max block m-auto p-1 px-3 rounded-md">
                {" "}{tech1} | {tech2} | {tech3}
              </p>
              <div className="flex justify-around items-center  my-2">
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href={git}
                  className="flex hover:bg-black gap-1 border rounded-md p-2 items-center justify-center duration-200 hover:scale-105"
                >
                  <AiFillGithub
                    className="hover:bg-black hover:animate-spin border rounded-full "
                    size={25}
                  />
                  <span>Code</span>
                </a>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href={net}
                  className="flex gap-1 border hover:bg-blue-500 rounded-md p-2 items-center duration-200 hover:scale-105"
                >
                  <SiNetlify
                    className="hover:bg-blue-500 hover:animate-spin border rounded-full"
                    size={25}
                  />
                  <span>Demo</span>
                </a>
              </div>
              <p className="md:text-left px-3">{desc}</p>
              <li className="text-center my-2 px-3 text-black bg-gradient-to-r from-blue-500 to-green-500">{type}</li>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
