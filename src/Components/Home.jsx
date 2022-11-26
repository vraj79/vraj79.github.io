import React from "react";

export const Home = () => {
  return (
    <div id="Home" className="h-screen w-full text">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-5 h-full md:flex-row">
        <div className="text-center text-2xl">
          <p>Welcome to my world ... I'm</p>
          <h2 className="text-6xl mt-3 font-signature">Vishal Raj</h2>
          <p>Full Stack Web Developer</p>
          <button
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-5 py-2 block m-auto rounded-md bg-gradient-to-r from-slate-500 to-blue-500 cursor-pointer"
            >
              My Projects
              
            </button>
        </div>
        <div>
            
          </div>
        <div className="mt-2 md:shrink-0">
          <img
            className="rounded-2xl mx-auto w-2/3 md:full"
            src="https://avatars.githubusercontent.com/u/108019045?v=4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
