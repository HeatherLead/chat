import React, { useState, useEffect } from "react";
import MainPage from "./components/MainPage";
import Chat from "./components/Chat";
import { auth } from "./config/firebase";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  if (!isAuth) {
    return <MainPage setIsAuth={setIsAuth} />;
  }
  return <Chat cookie={cookies} setIsAuth={setIsAuth} />;
}
export default App;
