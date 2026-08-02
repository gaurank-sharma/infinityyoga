import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <header className=" bg-navbar text-white ">
      {/* desktop nav section  */}
      <nav className=" fixed top-0 left-0 w-full  flex justify-between items-center z-50 bg-gradient-to-r from-[#000000]  to-[#3533cd] shadow-md">
      
        <Link to="/" className=" font-bold flex items-center">
        <img src="/yoga_logo1.png" alt="Infinity Logo" className="h-16 w-auto" />
        <span className="text-2xl font-bold text-white">Infinity Yoga</span>
        </Link>

        <div className="flex gap-6 list-none">
        <a
  href="tel:+919310284204"
  className="bg-white hover:bg-blue-800 px-2 md:px-4 py-2 rounded text-blue-700 hover:text-white transition duration-300 ease-linear inline-flex items-center gap-1 whitespace-nowrap"
>
  <span className="text-blue-700 text-lg">📞</span> +91-9310284204
</a>

          {/* <li className="cursor-pointer hover:text-orange-400 transition duration-300 ease-linear">
            Classes
          </li> */}
          {/* <li className="cursor-pointer hover:text-orange-400 transition duration-300 ease-linear">
            Prices */}
          {/* </li>
          <li className="cursor-pointer hover:text-orange-400 transition duration-300 ease-linear">
            Gallery
          </li>
          <li className="cursor-pointer hover:text-orange-400 transition duration-300 ease-linear">
            Teachers
          </li>
          <li className="cursor-pointer hover:text-orange-400 transition duration-300 ease-linear">
            Blogs
          </li> */}
        </div>

        {/* <div className=" md:hidden flex items-center">
          {menu ? (
            <IoMdCloseCircle
              size={29}
              className="cursor-pointer"
              onClick={handleChange}
            />
          ) : (
            <RiMenu4Fill
              size={29}
              className="cursor-pointer"
              onClick={handleChange}
            />
          )}
        </div> */}
      </nav>

      {/* responsive section  */}
      {/* <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute z-10  bg-gradient-to-r from-[#000000]  to-[#3533cd] text-white list-none left-0 top-16 font-semibold text-2xl text-left  pt-8 pb-4 gap-8 w-screen h-screen rounded-r-xl transition-transform duration-300`}
      >

        <li className="cursor-pointer hover:text-blue-400 mx-12">About</li>
        <li className="cursor-pointer hover:text-secondary mx-12">Classes</li>
        <li className="cursor-pointer hover:text-secondary mx-12">Prices</li>
        <li className="cursor-pointer hover:text-secondary mx-12">Gallery</li>
        <li className="cursor-pointer hover:text-secondary mx-12">Teachers</li>
        <li className="cursor-pointer hover:text-secondary mx-12">Blogs</li>
      </div> */}
    </header>
  );
};

export default Navbar;
