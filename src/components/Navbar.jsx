import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleClose = () => setToggleMenu(!toggleMenu);

  return (
    <div className="w-full h-[90px] cursor-pointer bg-black">
      <div className="max-w-[1240px]  mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff]">DEFI</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="text-white flex items-center">
            <Link to="/">
              <li>Platform</li>
            </Link>
            <Link to="/developers">
              <li>Developers</li>
            </Link>
            <Link to="/community">
              <li>Community</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <button className="ml-4">Use Defi</button>
          </ul>
        </div>
        {/* Hamburger Menu */}
        <div onClick={handleToggleMenu} className="block md:hidden">
          {toggleMenu ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            toggleMenu
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <Link onClick={handleClose} to="/">
              <li className="text-2xl">Platform</li>
            </Link>
            <Link onClick={handleClose} to="/developers">
              {" "}
              <li className="text-2xl">Developers</li>
            </Link>

            <Link onClick={handleClose} to="/community">
              {" "}
              <li className="text-2xl">Community</li>
            </Link>

            <Link onClick={handleClose} to="/about">
              {" "}
              <li className="text-2xl">About</li>
            </Link>

            <button className="m-8">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
