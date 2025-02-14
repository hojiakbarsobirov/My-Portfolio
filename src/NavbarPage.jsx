import React, { useState } from "react";
import NavLogo from "../public/Group.png";
import { Link } from "react-router-dom";

const NavbarPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <section className="bg-white w-full h-20 flex justify-between items-center px-5 md:px-20 sticky top-0 shadow-lg">
      <img className="w-10" src={NavLogo} alt="Logo" />

      {/* Burger Button */}
      <div className="md:hidden" onClick={toggleMenu}>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black"></div>
      </div>

      {/* Menu */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-16 left-0 bg-white w-full shadow-lg md:static md:flex md:space-x-10 md:shadow-none font-medium items-center text-[18px] flex-wrap justify-center gap-5 py-3 md:py-0`}
      >
        <li className="border-b md:border-none flex justify-center items-center py-4">
          <Link
            className="block py-2 px-5 md:py-0 focus:bg-gray-200 md:focus:bg-white md:focus:border-b-[1px] md:focus:border-black"
            to={"/"}
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            onClick={closeMenu}
            className="block bg-black text-white text-sm px-3 py-2 rounded-full"
          >
            Contact me
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default NavbarPage;
