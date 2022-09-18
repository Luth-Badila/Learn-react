const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-700 h-[3rem] px-[8rem]">
      <h1 className="text-xl text-[30px]">Luth-Badila Blog</h1>
      <div className="flex gap-2 [text-16px] text-base">
        <a className="hover:text-red-600" href="/">
          Home
        </a>
        <a className="hover:text-red-600" href="/create">
          Create New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
