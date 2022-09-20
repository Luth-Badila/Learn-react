import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My New Website", body: "Lorem ipsum dolor....", author: "Vegeta", id: 1 },
    { title: "Welcome Party !!!", body: "Lorem ipsum dolor....", author: "Goku", id: 2 },
    { title: "Web Dev Top Tips", body: "Lorem ipsum dolor....", author: "Krilin", id: 3 },
  ]);

  const [name, setName] = useState("Goku");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("Im run away from you");
    console.log(name);
  }, [name]);

  return (
    <div className="flex flex-col p-8 mt-3 gap-8">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button className="w-[120px] p-2 bg-blue-700 text-white rounded-md" onClick={() => setName("Bejita")}>
        change name
      </button>
      <p>{name}</p>
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Goku")} title="Goku's Blogs!" /> */}
    </div>
  );
};

export default Home;
