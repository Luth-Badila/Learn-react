import React, { useState } from "react";

const Home = () => {
  // let name = "Vegeta";
  const [name, setName] = useState("Vegeta");
  const [age, setAge] = useState(20);
  const handleClick = () => {
    setName("Goku");
    setAge(30);
  };

  // const handleClickAgain = (name, e) => {
  //   console.log("Please, don't click me " + name, e.target);
  // };

  return (
    <div className="flex flex-col p-8 mt-3 gap-8">
      <h1>Home</h1>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={handleClick} className="flex justify-start items-center bg-blue-700 p-2 w-[80px] rounded-lg">
        Click Me
      </button>
    </div>
  );
};

export default Home;
