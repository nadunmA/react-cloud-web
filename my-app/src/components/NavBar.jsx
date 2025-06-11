import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (

    <div className="text-black items-center h-24 max-w-[1455px] flex justify-between mx-auto px-4">

      
  
      <h1 className="text-3xl font-bold">NYCFOX</h1>

      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Products</li>
        <li className="p-4">Contact</li>
        <li className="p-4">About</li>
        <li className="p-4">Faq</li>
      </ul>

 
      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

 
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4">NYCFOX</h1>

        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Products</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Faq</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

