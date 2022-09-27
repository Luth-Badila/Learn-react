import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import useFetch from "./useFetch";

const InvitationCard = () => {
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
            <h2>{blog.title}</h2>
            <h1>Kepada Sdr/Sdri {blog.author}</h1>
            <p>Dari Bpk/Ibu {blog.id}</p>
            <div className="max-w-[50vw] text-center">{blog.body}</div>
            <h5>Hari : {blog.day}</h5>
            <h5>Tanggal : {blog.date}</h5>
            <h5>Waktu : {blog.time}</h5>
            <h5>Tempat : {blog.place}</h5>
            <h1>{blog.footer}</h1>
          </article>
        )}
        <Link to="/invitation">
          <button className="bg-blue-700 text-white rounded-md cursor-pointer w-[15vw] p-3">Buka undangan</button>
        </Link>
      </h1>
    </>
  );
};

export default InvitationCard;
