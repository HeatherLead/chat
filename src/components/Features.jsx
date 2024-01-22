import React from "react";
import phone from "../images/phone.jpg";
import lock from "../images/lock.jpg";
import ui from "../images/a sleek chat Ui .jpg";

export default function Features() {
  return (
    <div id="features">
      <h1 className=" bg-[#edeced] font-bold text-4xl md:text-5xl lg:text-6xl">
        Our amazing offerings include...
      </h1>

      <div className=" flex justify-around items-center flex-wrap-reverse p-10 bg-[#edeced]">
        <div className=" p-4 border-[4px] border-[#d29774] w-96 ">
          <h1 className=" pb-10 text-5xl">Emoji Ai</h1>
          <p className=" text-xl ">
            Spending hours hunting for the "perfect" emoji to jazz up your
            convo? No sweat, we've got your back!
          </p>
        </div>
        <img className="img pb-10 w-96" src={phone} alt="" />
      </div>

      <div className=" flex justify-around items-center flex-wrap p-10 bg-[#eb7f67]">
        <img className="img pb-10 w-96" src={lock} alt="" />
        <div className=" p-4 border-[4px] border-[#edeced] w-96 ">
          <h1 className=" text-white pb-10 text-5xl">Security</h1>
          <p className=" text-white text-xl ">
            Your safety is our top-priority! That's why we've got your back with
            a triple-layered encryption system.
          </p>
        </div>
      </div>
      <div className=" flex justify-around items-center flex-wrap-reverse p-10 bg-[#edeced]">
        <div className=" p-4 border-[4px] border-[#d29774] w-96 ">
          <h1 className=" pb-10 text-5xl">Seamless Ui</h1>
          <p className=" text-xl ">
            Our app is like a magic carpet ride with a sleek UI that'll have you
            gliding through its features with just a tap of your finger!
          </p>
        </div>
        <img className="img pb-10 w-96" src={ui} alt="" />
      </div>
    </div>
  );
}
