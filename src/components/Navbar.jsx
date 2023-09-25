import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "../data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full flex py-6 justify-between items-center navbar relative sm:px-16 shadow-md px-6">
      <h1 className="font-bold text-2xl ">Adebisi</h1>
      <ul className="list-none sm:flex text-black sticky top-0 right-0 hidden  justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`} className="hover:text-blue-900">{nav.text}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <AiOutlineClose
            className="w-[28px] h-[28px] text-black cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
        ) : (
          <GiHamburgerMenu
            className="w-[28px] h-[28px] text-black cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
        )}
        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-neutral-800 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex text-white  flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`} className="border-b-2 px-2">{nav.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
