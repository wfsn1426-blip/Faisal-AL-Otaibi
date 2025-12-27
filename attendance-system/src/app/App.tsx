import { useState } from "react";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import BottomNav from "./components/BottomNav";

export default function App() {
  const [screen, setScreen] =
    useState<"splash" | "login" | "home" | "profile">("splash");

  return (
    <>
      {screen === "splash" && (
        <Splash onFinish={() => setScreen("login")} />
      )}

      {screen === "login" && (
        <Login onLogin={() => setScreen("home")} />
      )}

      {screen === "home" && (
        <>
          <Home />
          <BottomNav active="home" onChange={setScreen} />
        </>
      )}

      {screen === "profile" && (
        <>
          <Profile />
          <BottomNav active="profile" onChange={setScreen} />
        </>
      )}
    </>
  );
}
