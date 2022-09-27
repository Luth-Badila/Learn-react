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
          <article className="flex flex-col justify-center gap-3 items-center h-[80vh]">
            <h2>{blog.title}</h2>
            <h1>Kepada Sdr/Sdri {blog.author}</h1>
            <p>Dari Bpk/Ibu {blog.id}</p>
            <div className="max-w-[50vw] text-center">{blog.body}</div>
            <h5>Hari : {blog.day}</h5>
            <h5>Tanggal : {blog.date}</h5>
            <h5>Waktu : {blog.time}</h5>
            <h5>tempat : {blog.place}</h5>
            <h1>{blog.footer}</h1>
          </article>
        )}
      </h1>
      ;
    </>
  );
};

export default BlogDetails;
