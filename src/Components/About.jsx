import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full bg-gradient-to-b from-green-500 to-blue-600 text-center text-white lg:h-screen grid justify-center items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-4">
          <p className="text-4xl text-center font-bold border-b-4 border-gray-500 p-3">About Me</p>
        </div>
        <p className="text-xl">
          A Full Stack Web Developer with a passion for
          developing scalable web applications and working across the full
          stack. Adaptive to all kinds of people, and but not to surrounding and
          always appreciate constructive criticism to improve my performance. A
          person with good communication skills and effective team management
          skills. A good learner with a problem-solving mindset.Seeking to work
          in an environment that can encourage me to succeed both personally and
          professionally and where I can utilize my skills and knowledge not
          only for my growth but also for the people around me.
        </p>
        <hr className="my-4 w-full" />
        <p className="text-xl">
          I'm open to Job opportunities. If you think my skills are relevant to
          your job requirements then do contact me.
        </p>
      </div>
    </div>
  );
};

export default About;
