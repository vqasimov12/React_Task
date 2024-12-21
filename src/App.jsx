import React from "react";
import Homepage from "./homepage/Homepage";
import { useStore } from "zustand";
import { themeStore } from "./common/Store";
import Login from "./login/Login";
function App() {
  const { theme, toggle } = useStore(themeStore);

  return (
    <div
      className={`w-full h-full ${theme === "light" ? "bg-white" : "bg-zinc-500"}`}>
      <Homepage />
      {/* <Login/> */}
    </div>
  );
}

export default App;
