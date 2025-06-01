import React from "react";
import PortfolioImg from "../public/portfolio-img1.png";
import PortfolioImg2 from "../public/portfolio-img-2.png";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <>
      {/* Header */}
      <div className="bg-gray-200 w-full py-10 flex justify-center items-center">
        <div className="font-bold text-3xl sm:text-4xl border-[4px] sm:border-[6px] border-black px-6 py-3 text-center">
          PORTFOLIO
        </div>
      </div>

      {/* Projects Section */}
      <section className="bg-gray-200 w-full py-12 px-4 flex flex-wrap justify-center gap-8 sm:gap-10">

        {/* Project 1 */}
        <div className="bg-white border border-black rounded-2xl w-[90%] max-w-[270px] sm:w-[250px] h-[340px] flex flex-col justify-between p-4 shadow-md">
          <div className="h-[50%] flex justify-center items-center mb-4">
            <img
              className="hover:scale-105 transition-transform duration-200 ease-in-out"
              src={PortfolioImg}
              alt="Project One"
            />
          </div>
          <h3 className="font-bold text-center text-lg sm:text-xl mb-2">
            Project One
          </h3>
          <div className="flex justify-around items-center">
            <a
              href="https://github.com/hojiakbarsobirov/My-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-full border border-black hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>
            <button className="px-4 py-2 text-sm rounded-full border border-black hover:bg-black hover:text-white transition">
              Live Demo
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white border border-black rounded-2xl w-[90%] max-w-[270px] sm:w-[250px] h-[340px] flex flex-col justify-between p-4 shadow-md">
          <div className="h-[50%] flex justify-center items-center mb-4">
            <img
              className="hover:scale-105 transition-transform duration-200 ease-in-out"
              src={PortfolioImg2}
              alt="Project Two"
            />
          </div>
          <h3 className="font-bold text-center text-lg sm:text-xl mb-2">
            Project Two
          </h3>
          <div className="flex justify-around items-center">
            <a
              href="https://github.com/hojiakbarsobirov/Rezume-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-full border border-black hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://rezume-project.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-full border border-black hover:bg-black hover:text-white transition"
            >
              Live Demo
            </a>
          </div>
        </div>

         {/* Project 3 */}
        <div className="bg-white border border-black rounded-2xl w-[90%] max-w-[270px] sm:w-[250px] h-[340px] flex flex-col justify-between p-4 shadow-md">
          <div className="h-[50%] flex justify-center items-center mb-4">
            <img
              className="hover:scale-105 transition-transform duration-200 ease-in-out"
              src='./portfolio-img-3.png'
              alt="Project Two"
            />
          </div>
          <h3 className="font-bold text-center text-lg sm:text-xl mb-2">
            Project Three
          </h3>
          <div className="flex justify-around items-center">
            <a
              href="https://github.com/hojiakbarsobirov/LMS-Sites"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-full border border-black hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://lms-sites.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-full border border-black hover:bg-black hover:text-white transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="bg-white border border-black rounded-2xl w-[90%] max-w-[270px] sm:w-[250px] h-[340px] flex flex-col justify-between p-4 shadow-md">
          <div className="h-[50%] flex justify-center items-center mb-4">
            <img
              className="hover:scale-105 transition-transform duration-200 ease-in-out"
              src='./portfolio-img4.png'
              alt="Project Two"
            />
          </div>
          <h3 className="font-bold text-center text-lg sm:text-xl mb-2">
            Project Four
          </h3>
          <div className="flex justify-around items-center">
            <a
              href="https://github.com/hojiakbarsobirov/Chat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-full border border-black hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://chatly-two.vercel.app/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-full border border-black hover:bg-black hover:text-white transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
