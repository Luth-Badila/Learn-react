import React, { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My New Website", body: "Lorem ipsum dolor....", author: "Vegeta", id: 1 },
    { title: "Welcome Party !!!", body: "Lorem ipsum dolor....", author: "Goku", id: 2 },
    { title: "Web Dev Top Tips", body: "Lorem ipsum dolor....", author: "Krilin", id: 3 },
  ]);

  return (
    <div className="flex flex-col p-8 mt-3 gap-8">
      {blogs.map((blog) => (
        <div className="p-16 hover:shadow-lg hover:shadow-blue-500/50" key={blog.id}>
          <h1 className="text-xl font-bold">{blog.title}</h1>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
