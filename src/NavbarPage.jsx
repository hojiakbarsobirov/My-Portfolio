import React from "react";
import NavLogo from "../public/Group.png";
import { Link } from "react-router-dom";

const NavbarPage = () => {
  return (
    <section className="bg-white w-full h-20 flex justify-between items-center px-20 sticky top-0 shadow-lg">
      <img className="w-10" src={NavLogo} alt="" />

      <ul className="font-medium flex items-center space-x-10 text-[18px] ">
        <li>
          <Link className="focus:border-b-[2px] border-black" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="focus:border-b-[2px] border-black" to={"/about"}>
            About me
          </Link>
        </li>
        <li>
          <Link className="focus:border-b-[2px] border-black" to={"/skills"}>
            Skills
          </Link>
        </li>
        <li>
          <Link className="focus:border-b-[2px] border-black" to={"/portfolio"}>
            Portfolio
          </Link>
        </li>
        <button className="bg-black text-white text-sm px-3 py-2 rounded-full">
          <Link to={"/contact"}>Contact me</Link>
        </button>
      </ul>
    </section>
  );
};

export default NavbarPage;
