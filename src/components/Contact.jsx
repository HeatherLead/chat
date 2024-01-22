import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <div
      id="contact"
      className=" flex justify-around  flex-wrap  p-10 bg-[#eb7f67]"
    >
      <div>
        <h1 className=" text-white text-7xl">Let's</h1>
        <h1 className=" text-white text-7xl">Collaborate</h1>
      </div>
      <div className=" pt-20">
        <div>
          <h1 className=" text-white text-3xl">Visit Our Socials:</h1>
          <div>
            <FacebookIcon className=" mr-6" fontSize="large" />
            <InstagramIcon className=" mr-6" fontSize="large" />
            <TwitterIcon className=" mr-6" fontSize="large" />
            <LinkedInIcon className=" mr-6" fontSize="large" />
          </div>
        </div>
        <div className=" pt-16">
          <h1 className=" font-bold text-white text-lg pt-2 pb-2">WRITE ME</h1>
          <p className=" text-white text-lg pt-2 ">
            The address initially seems ambiguous, but the zip code
          </p>
          <p className=" text-white text-lg  pb-2">
            "12345" clarifies the location.
          </p>
          <h1 className=" font-bold text-white text-lg pt-4">EMAIL ME</h1>
          <p className=" text-white text-lg pt-2 pb-2">
            ArthuzalChat@gmail.com
          </p>
          <h1 className=" font-bold text-white text-lg pt-4">GIVE ME A CALL</h1>
          <p className=" text-white text-lg pt-2 pb-2">(123) 456 7890</p>
        </div>
      </div>
    </div>
  );
}
