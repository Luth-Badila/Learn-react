import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-2">
      <h2>Maaf</h2>
      <p>Halaman yang anda tuju tidak tersedia</p>
      <Link to="/">
        <button className="bg-blue-700 text-white rounded-md cursor-pointer w-[170px] p-3">Kembali ke beranda</button>
      </Link>
    </div>
  );
};

export default NotFound;
