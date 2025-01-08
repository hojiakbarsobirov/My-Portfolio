import React from "react";
import GitIcons from "../public/github.png";
import InIcons from "../public/iconss.png";
import { Link } from "react-router-dom";
import InstaIcons from "../public/insta-icons.png";
import './App.css'

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
                <button className="bg-gray-400 font-bold px-3 py-2 text-2xl rounded-md shadow-xl">
                  <Link
                    target="_blank"
                    to={"https://www.instagram.com/sobrvkh/"}
                  >
                    <img className="w-8 hover:scale-110 transition ease-in" src={InstaIcons} alt="" />
                  </Link>
                </button>
                <button className="bg-gray-400 font-bold px-3 py-2 text-xl rounded-md shadow-xl">
                  <Link to={"https://github.com/hojiakbarsobirov"}>
                    <img className="w-7 hover:scale-110 transition ease-in" src={GitIcons} alt="" />
                  </Link>
                </button>
                <button className="bg-gray-400 font-bold px-3 py-2 text-xl rounded-md shadow-xl">
                  <img className="w-7 hover:scale-110 transition ease-in" src={InIcons} alt="" />
                </button>
              </div>
            </section>
          </div>
          <div className=" w-[50%] h-full flex justify-center items-end">
            <img className=" h-[90%]" src="" alt="" />
          </div>
        </header>
      </section>
    </>
  );
};

export default SectionPage;
