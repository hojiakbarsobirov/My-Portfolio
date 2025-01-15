import React from "react";
import GitIcons from "/public/github.png";
import InIcons from "/public/iconss.png";
import { Link } from "react-router-dom";
import './App.css'
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import PortfolioPage from "./PortfolioPage";

const SectionPage = () => {
  return (
    <>
      <section className="background-banner">
        <header className=" w-full h-[80%] flex">
          <div className=" w-[50%] h-full flex justify-around items-end flex-col">
            <section className="w-[88%] h-full flex justify-evenly items-start flex-col">
              <h2 className="font-medium text-4xl">Hi, I am</h2>
              <div>
                <h1 className="font-medium text-6xl">Hojiakbar Sobirov</h1>
                <h2 className="font-medium text-3xl text-gray-400">
                  Front-end Developer/
                </h2>
              </div>

              <div className=" w-[50%] h-20 flex justify-start space-x-10 items-center">
                <button className="bg-gray-400 font-bold  rounded-md shadow-xl">
                  <Link
                    target="_blank"
                    to={"https://uz.linkedin.com/"}
                  >
                    <i className="text-4xl px-2 py-1 fa-brands fa-square-instagram"></i>
                  </Link>
                </button>
                <button className="bg-gray-400 font-bold rounded-md shadow-xl">
                  <Link to={"https://github.com/hojiakbarsobirov"}>
                    <i className="w-full px-3 py-2 text-3xl fa-brands fa-github"></i>
                  </Link>
                </button>
                <button className="bg-gray-400 font-bold text-xl rounded-md shadow-xl">
                  <i className="fa-brands fa-linkedin text-3xl px-3 py-2"></i>
                </button>
              </div>
            </section>
          </div>
          <div className=" w-[50%] h-full flex justify-center items-end">
            <img className=" h-[90%]" src="" alt="" />
          </div>
        </header>
      </section>
      <AboutPage/>
      <SkillsPage/>
      <PortfolioPage/>
    </>
  );
};

export default SectionPage;
