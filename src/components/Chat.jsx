import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "../config/firebase";
import { signOut } from "firebase/auth";
import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  getDoc,
  updateDoc,
  doc,
  setDoc,
  arrayUnion,
} from "firebase/firestore";
import LogoutIcon from "@mui/icons-material/Logout";
import SendIcon from "@mui/icons-material/Send";
import { SearchUser } from "./SearchUser";
import UserList from "./UserList";

export default function Chat(props) {
  const photo = auth.currentUser.photoURL;
  const messageRef = collection(db, "Chats");
  const [userList, setUserList] = useState([null]);
  const [recName, setRecName] = useState("");
  const [recImg, setRecImg] = useState("");
  const [message, setMessage] = useState("");
  const [combId, setCombId] = useState("");
  const [data, setData] = useState([]);
  const containerRef = useRef(null);

  async function handleLogout() {
    await signOut(auth);
    props.cookie.remove("auth-token");
    props.setIsAuth(false);
  }
  const sentUser = (user) => {
    setUserList((prevUserList) => [...prevUserList, user]);
  };

  async function userSetter(data) {
    let combinedId;
    setRecImg(data.photoUrl);
    setRecName(data.displayName);
    if (auth.currentUser.uid > data.uid) {
      combinedId = auth.currentUser.uid + data.uid;
    } else {
      combinedId = data.uid + auth.currentUser.uid;
    }
    try {
      const res = await getDoc(doc(db, "Chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "Chats", combinedId), { messages: [] });
      }
    } catch (err) {
      console.error(err);
    }
    setCombId(combinedId);
    mesHandler();
  }
  async function handleClick(combId, message) {
    try {
      const date = new Date();
      const messageObj = {
        name: auth.currentUser.displayName,
        date: date,
        message: message,
      };

      await updateDoc(doc(db, "Chats", combId), {
        messages: arrayUnion(messageObj),
      });
    } catch (err) {
      console.error(err);
    }
    setMessage("");
    mesHandler();
  }

  async function mesHandler() {
    try {
      const docRef = doc(db, "Chats", combId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const messagesArray = data.messages || [];
        setData(messagesArray);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [data]);

  return (
    <div className="chat flex justify-center items-center w-screen h-screen bg-gray-600">
      <div className=" flex md:w-[700px] lg:w-[900px] h-[500px] bg-slate-600 shadow-2xl rounded-3xl">
        <div className=" m-5 overflow-hidden  rounded-lg border-2 border-black w-[300px] md:w-[250px] lg:w-[300px] h-[460px]">
          <section className=" p-2 border-b-2 border-black flex justify-between">
            <img className=" w-9 rounded-full" src={photo} alt="" />
            <LogoutIcon
              onClick={handleLogout}
              className=" cursor-pointer"
              fontSize="large"
            />
          </section>
          <SearchUser sentUser={sentUser} />
          <UserList data={userSetter} list={userList} />
        </div>
        <div className="text-room relative m-5 ml-0  rounded-lg border-2 border-black md:w-[390px] lg:w-[540px] md:h-[460px]">
          <div className=" p-2   justify-between border-b-2 border-black flex">
            <img className=" w-9 rounded-full" src={recImg} alt="" />
            <h1 className=" text-white pl-5 text-2xl">{recName}</h1>
          </div>
          <div
            ref={containerRef}
            className="mHolder h-[80%] w-full flex  flex-col   overflow-scroll overflow-x-hidden"
          >
            {data.map((item, index) => {
              const isSender = item.name;
              let val;
              if (isSender == auth.currentUser.displayName) {
                val = "sender";
              } else {
                val = "reciver";
              }
              return (
                <div className={val} key={index}>
                  <h1 className=" text-2xl">{item.message}</h1>
                </div>
              );
            })}
          </div>

          <input
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            placeholder=" Enter Message"
            type="text"
            className=" absolute rounded-bl-lg bottom-0 h-9 w-full"
          />
          <SendIcon
            className=" rotate-[330deg] cursor-pointer absolute bottom-1 right-0"
            fontSize="large"
            onClick={() => {
              handleClick(combId, message);
            }}
          />
        </div>
      </div>
    </div>
  );
}
