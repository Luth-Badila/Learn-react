import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch("http://localhost:7000/blogs/" + id);

  return (
    <>
      <h1 className="flex flex-col p-8 mt-3 gap-8 text-3xl">
        {isLoading && <div>Now Loading.....</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
          </article>
        )}
      </h1>
      ;
    </>
  );
};

export default BlogDetails;
