import React from "react";
import GitHubCalendar from "react-github-calendar";

export const GitHub = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-6 flex flex-col justify-center w-full text-white">
      <h1 className="text-l mb-3 md:text-3xl">GITHUB CONTRIBUTION CALENDER</h1>
      <div className="animate-pulse hover:scale-105 duration-200 border p-3 rounded-md">
      <GitHubCalendar
        blockSize={30}
        // hideTotalCount={true}
        hideColorLegend={true}
        // hideMonthLabels={true}
        // blockRadius={10}
        // blockMargin={10}
        fontSize={10}
        color={"green"}
        username={"vraj79"}
      />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center my-3 gap-4">
        <img
        className="rounded-lg hover:scale-105 duration-200"
          src="https://github-readme-streak-stats.herokuapp.com/?user=vraj79&show_icons=true&locale=en"
          alt="vraj79"
        />
        <img
        className="rounded-lg hover:scale-105 duration-200"
          src="https://github-readme-stats.vercel.app/api?username=vraj79&show_icons=true&locale=en"
          alt="vraj79"
        />
      </div>
    </div>
  );
};

