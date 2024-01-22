import React from "react";

export default function UserList({ list, data }) {
  const filteredUserList = list.filter((user) => user !== null);
  return (
    <div>
      {filteredUserList.map((user, index) => (
        <div
          onClick={() => {
            data(user);
          }}
          className=" cursor-pointer border-b-2 p-2 flex"
          key={index}
        >
          <img
            className=" w-12 rounded-full mr-4"
            src={user.photoUrl}
            alt={`User ${index}`}
          />
          <p className=" text-white text-xl">{user.displayName}</p>
        </div>
      ))}
    </div>
  );
}
