import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Goku");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    // Post method
    setIsLoading(true);

    fetch("http://localhost:7000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsLoading(false);
    });

    // history.go(-1);
    history.push("/");
  };
  return (
    <>
      <div className="h-[80vh] flex flex-col justify-center items-center">
        <h2 className="">Create me</h2>
        <form className="flex flex-col gap-3 w-[400px]" onSubmit={handleSubmit}>
          <label className="text-[20px]">Blog title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="h-[50px] border border-black p-2" />
          <label className="text-[20px]">Blog body</label>
          <textarea required value={body} onChange={(e) => setBody(e.target.value)} className="h-[80px] border border-black p-2" />
          <label className="text-[20px]">Blog author</label>
          <select className="p-2" value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="Goku">Goku</option>
            <option value="Bejita">Bejita</option>
          </select>
          {!isLoading && <button className="bg-blue-700 text-white rounded-md cursor-pointer w-[100px] p-3">Add Blog</button>}
          {isLoading && (
            <button disabled className="bg-blue-700 text-white rounded-md cursor-pointer w-[100px] p-3">
              Adding Blog.....
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Create;
