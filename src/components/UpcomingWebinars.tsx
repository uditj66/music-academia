import { div } from "motion/react-client";
import React from "react";
import MyCardStack from "./MyCardStack";

function UpcomingWebinars() {
  return (
    <>
      <div className="mt-20  bg-black text-neutral-400 text-center font-bold tracking-wide text-2xl">
        Featured Webinars
      </div>
      <p className="mt-5 p-5 bg-black bg-clip-text font-extrabold text-center tracking-tight text-7xl">
        Enhance your musical Journey
      </p>
      <div>
        <MyCardStack/>
      </div>
      <div className="m-5 p-3 text-center">
      <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
        View All Webinars
      </button>
      </div>
      
    </>
  );
}

export default UpcomingWebinars;
