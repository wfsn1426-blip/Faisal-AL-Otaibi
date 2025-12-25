import { useState } from "react";
import Splash from "./screens/Splash";
import Login from "./screens/Login";

export default function App() {
  const [screen, setScreen] = useState<"splash" | "login" | "home">("splash");

  return (
    <>
      {screen === "splash" && (
        <Splash onFinish={() => setScreen("login")} />
      )}

      {screen === "login" && (
        <Login onLogin={() => setScreen("home")} />
      )}
    </>
  );
}
