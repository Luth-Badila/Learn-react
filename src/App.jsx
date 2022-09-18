import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const title = "welcome to the new world 0.4 not 4.0 in my country";
  const likes = 50;
  const person = { name: "yoshi", age: 24 };
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      <h1>{title}</h1>
      <p>Liked {likes}</p>
      <h3>{person.name}</h3>
    </div>
  );
}

export default App;
