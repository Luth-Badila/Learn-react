import React from "react";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="flex flex-col p-8 mt-3 gap-8">
      <h1 className="text-xl font-bold">{title}</h1>
      {blogs.map((blog) => (
        <div className="p-8 hover:shadow-lg hover:shadow-blue-500/50" key={blog.id}>
          <h1 className="text-xl font-bold">{blog.title}</h1>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)} className="p-2 bg-blue-700 text-white rounded-md">
            Delete Blogs
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
