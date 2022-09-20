import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My New Website", body: "Lorem ipsum dolor....", author: "Vegeta", id: 1 },
    { title: "Welcome Party !!!", body: "Lorem ipsum dolor....", author: "Goku", id: 2 },
    { title: "Web Dev Top Tips", body: "Lorem ipsum dolor....", author: "Krilin", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("Im run away from you");
  }, [name]);

  return (
    <div className="flex flex-col p-8 mt-3 gap-8">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
