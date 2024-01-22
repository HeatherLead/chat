import Contact from "./Contact";
import Features from "./Features";
import LandingPage from "./LandingPage";
import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { signInWithPopup } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, googleProvider, db } from "../config/firebase";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function MainPage(props) {
  const { setIsAuth } = props;
  const userRef = collection(db, "users");

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
      await addDoc(userRef, {
        displayName: auth.currentUser.displayName,
        photoUrl: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const [toggle, setToggle] = useState(false);
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWinWidth(window.innerWidth));
    return window.removeEventListener("resize", () =>
      setWinWidth(window.innerWidth)
    );
  }, winWidth);

  return (
    <div>
      <div className=" p-4 pt-0 mb-10">
        <img src={logo} className="  float-left  w-fit mt-2  h-10" alt="" />
        <ul className=" flex relative  flex-col float-right lg:hidden ">
          <MenuIcon
            className=" md: hidden"
            style={{ display: toggle ? "none" : "block" }}
            fontSize="large"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <CloseIcon
            style={{ display: toggle ? "block" : "none" }}
            fontSize="large"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </ul>
        <ul
          style={{ display: winWidth > 1024 || toggle ? "flex" : "none" }}
          className=" absolute top-[55px] right-[16px] lg:top-0 lg:right-0 lg:relative  bg-gray-700 lg:bg-white p-2 lg:float-right lg:flex gap-8 rounded-md  flex-col lg:flex-row lg:justify-end"
        >
          <li>
            <button className=" pt-1 pb-1 pr-3 pl-3 font-bold rounded-xl text-2xl text-[#edeced]">
              Features
            </button>
          </li>
          <li>
            <button className=" pt-1 pb-1 pr-3 pl-3 font-bold rounded-xl text-2xl text-[#edeced]">
              Contact us
            </button>
          </li>
          <li>
            <button
              onClick={signInWithGoogle}
              className=" pt-1 pb-2 pr-4 pl-4 rounded-md text-xl  text-white  bg-blue-500"
            >
              Sign In
            </button>
          </li>
        </ul>
      </div>

      <LandingPage />
      <Features />
      <Contact />
    </div>
  );
}
