import React from "react";

const Home = () => {
  const handleClick = (e) => {
    console.log("Hello, click me if you can ", e);
  };

  const handleClickAgain = (name, e) => {
    console.log("Please, don't click me " + name, e.target);
  };

  return (
    <div className="flex flex-col p-8 mt-3 ">
      <h1>Home</h1>
      <button onClick={handleClick} className="flex justify-start items-center bg-blue-700 p-2 w-[80px] rounded-lg">
        Click Me
      </button>
      <button onClick={(e) => handleClickAgain("Mario", e)} className="flex justify-start items-center bg-blue-700 p-2 w-[120px] rounded-lg">
        Click me again
      </button>
    </div>
  );
};

export default Home;
