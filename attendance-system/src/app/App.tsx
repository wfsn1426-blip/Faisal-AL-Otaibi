import { useState } from "react";
import Splash from "./screens/Splash";

export default function App() {
  const [screen, setScreen] = useState<"splash" | "login">("splash");

  return (
    <>
      {screen === "splash" && (
        <Splash onFinish={() => setScreen("login")} />
      )}
    </>
  );
}
