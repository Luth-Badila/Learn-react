import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch("http://localhost:7000/blogs/" + id);
  const history = useHistory();

  return (
    <>
      <h1 className="flex flex-col p-8 mt-3 gap-8 text-3xl">
        {isLoading && <div className="flex justify-center items-center h-[80vh]">Now Loading.....</div>}
        {error && <div className="flex justify-center items-center h-[80vh]">{error}</div>}
        {blog && (
          <article className="flex flex-col justify-center items-center h-[80vh]">
            <h1>Kepada Sdr/Sdri {blog.author}</h1>
            <h2>{blog.title}</h2>
            <p>{blog.id}</p>
            <div>{blog.body}</div>
          </article>
        )}
      </h1>
      ;
    </>
  );
};

export default BlogDetails;
