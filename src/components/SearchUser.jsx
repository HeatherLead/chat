import React, { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import phone from "../images/phone.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { collection, query, where, getDocs } from "firebase/firestore";

export function SearchUser(props) {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  async function handleUser() {
    setUsername("");
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        setUser(userData);
        props.sentUser(userData);
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className=" relative">
      <input
        type="text"
        placeholder="Find the user..."
        className=" w-full h-8 bg-slate-200 "
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
      />
      <SearchIcon
        fontSize="large"
        className=" absolute right-0 cursor-pointer"
        onClick={handleUser}
      />
      {!user && (
        <div className=" text-white text-3xl text-center ">User Not Found!</div>
      )}
      {user && (
        <div className=" border-b-2 p-2 flex">
          <img className=" mr-4 rounded-full w-12" src={user.photoUrl} alt="" />
          <div>
            <h1 className=" text-white text-md">{user.displayName}</h1>
            <p></p>
          </div>
        </div>
      )}
    </div>
  );
}
