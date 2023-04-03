import React from "react";
import Typical from "react-typical";
import { SocialLinks } from "./SocialLinks";

export const Home = () => {
  return (
    <div id="Home" name="Home" className="h-screen w-full">
      <div className="mx-auto flex flex-col items-center justify-center gap-10 h-full md:flex-row">
        <div className=" w-1/3 text-center text-2xl p-2">
          <p>Welcome to my world ... I'm</p>
          <h2 className="text-6xl mt-3 font-signature">Vishal Raj</h2>
          <span className="w-max">
          <Typical
                    loop={Infinity}
                    steps={[
                      "A Full Stack Web Developer",
                      1500,
                      "A MERN Stack Web Developer",
                      1500,
                      
                    ]}
                  />
          </span>
          {/* <Link
            to="Projects"
            smooth
            offset={-50}
            duration={500}
            className="group text-white w-fit px-5 py-2 block m-auto rounded-md bg-gradient-to-r from-slate-500 to-blue-500 cursor-pointer"
          >
            My Projects
          </Link> */}
          <SocialLinks/>
        </div>
        <div className="mt-2 md:shrink-0">
          <img
            className="rounded-2xl w-1/2 m-auto lg:w-2/3 mt-1"
            src="https://avatars.githubusercontent.com/u/108019045?v=4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
