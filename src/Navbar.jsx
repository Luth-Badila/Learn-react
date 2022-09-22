import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-blue-700 h-[3rem] px-[8rem]">
        <h1 className="text-3xl font-bold cursor-pointer">
          <Link to="/">Luth-Badila Blog</Link>
        </h1>
        <div className="flex gap-2 [text-16px] text-base cursor-pointer">
          <div className="hover:text-red-600">
            <Link to="/">Home</Link>
          </div>
          <div className="hover:text-red-600">
            <Link to="/create">Create New Blog</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
