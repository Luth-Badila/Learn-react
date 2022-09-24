import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Goku");
  return (
    <>
      <div className="h-[80vh] flex flex-col justify-center items-center">
        <h2 className="">Create me</h2>
        <form className="flex flex-col gap-3 w-[400px]">
          <label className="text-[20px]">Blog title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="h-[50px] border border-black p-2" />
          <label className="text-[20px]">Blog body</label>
          <textarea required value={body} onChange={(e) => setBody(e.target.value)} className="h-[80px] border border-black p-2" />
          <label className="text-[20px]">Blog author</label>
          <select className="p-2" value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="Goku">Goku</option>
            <option value="Bejita">Bejita</option>
          </select>
          <button className="bg-blue-700 text-white rounded-md cursor-pointer w-[100px]">Add Blog</button>
          <p>{title}</p>
          <p>{body}</p>
          <p>{author}</p>
        </form>
      </div>
    </>
  );
};

export default Create;
