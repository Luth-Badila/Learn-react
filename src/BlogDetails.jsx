import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch("http://localhost:7000/blogs/" + id);
  const history = useHistory();

  return (
    <>
      <h1 className="flex flex-col justify-center items-center h-[90vh] p-8 mt-3 gap-8 text-3xl">
        {isLoading && <div className="flex">Now Loading.....</div>}
        {error && <div className="flex">{error}</div>}
        {blog && (
          <article className="flex flex-col justify-center gap-3 items-center h-[80vh]">
            <h2>Kepada yth: </h2>
            <h2>{blog.author} </h2>
            <h2>{blog.address} </h2>
          </article>
        )}
        <Link to={`/invitation/${id}`}>
          <button className="bg-blue-700 text-white rounded-md cursor-pointer w-[15vw] p-3">Buka undangan</button>
        </Link>
      </h1>
    </>
  );
};

export default BlogDetails;
