import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs").then((res) => {
        return res.json().then((data) => {
          setBlogs(data);
          setIsLoading(false);
        });
      });
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col p-8 mt-3 gap-8">
      {isLoading && <div>Now Loading .....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
