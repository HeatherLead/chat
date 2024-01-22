import React from "react";
import landing from "../images/landing.png";

export default function LandingPage() {
  return (
    <div className="  p-0 pt-10 pb-10 bg-[#eb7f76] flex flex-wrap-reverse justify-center  items-center">
      <section className=" bg-[#eb7f76] lg:pl-28 pl-28 md:pl-60  lg:w-[505px] w-[100vw] flex flex-col justify-center items-start h-[515px]">
        <h1 className=" text-7xl pb-7 text-white font-bold">Arthuzal</h1>
        <p className=" w-80 text-white">
          Looking for a chat app that's not only your best bud but also super
          secure? Look no further!
        </p>
      </section>
      <img className="w-[500px]" src={landing} alt="" />
    </div>
  );
}
