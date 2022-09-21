import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:7000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  //  npx json-server --watch data/db.json --port 7000

  return (
    <div className="flex flex-col p-8 mt-3 gap-8">
      {error && <div>{error}</div>}
      {isLoading && <div>Now Loading .....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
