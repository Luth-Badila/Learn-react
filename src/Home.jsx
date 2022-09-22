import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch("http://localhost:7000/blogs");
  //  npx json-server --watch data/db.json --port 7000

  return (
    <>
      <div className="flex flex-col p-8 mt-3 gap-8">
        {error && <div>{error}</div>}
        {isLoading && <div>Now Loading .....</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      </div>
    </>
  );
};

export default Home;
