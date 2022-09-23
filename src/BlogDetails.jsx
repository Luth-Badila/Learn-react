import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <>
      <h1 className="font-bold text-3xl">BlogDetails - {id} </h1>;
    </>
  );
};

export default BlogDetails;
