import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch("http://localhost:7000/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:7000/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <>
      <h1 className="flex flex-col p-8 mt-3 gap-8 text-3xl">
        {isLoading && <div>Now Loading.....</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Kepada Sdr/Sdri {blog.author}</p>
            <div>{blog.body}</div>
            <button className="bg-blue-700 text-white rounded-md cursor-pointer w-[100px] p-3" onClick={handleClick}>
              delete
            </button>
          </article>
        )}
      </h1>
      ;
    </>
  );
};

export default BlogDetails;
