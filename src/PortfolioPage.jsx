import React from "react";
import PortfolioImg from '../public/portfolio-img1.png'
import PortfolioImg2 from '../public/portfolio-img-2.png'
import { Link } from 'react-router-dom'

const PortfolioPage = () => {
  return (
    <>
      <div className="bg-gray-200 w-full h-32 flex justify-center items-center">
        <div className="font-bold text-4xl border-[6px] border-black w-[230px] flex justify-center items-center px-4 py-3">
          PORTFOLIO
        </div>
      </div>

      <section className="bg-gray-200 w-full h-auto flex flex-wrap justify-center py-20 items-center gap-10">

        <div className="border-[1px] bg-white border-black w-[250px] h-[320px] rounded-2xl p-2">
          <div className=" w-full h-[50%] mb-5 flex justify-center items-center">
            <img className="hover:scale-105 transition ease-in" src={PortfolioImg} alt="" />
          </div>

          <center className="font-bold text-xl">
            Project One
          </center>

          <div className="w-full h-[30%] flex justify-around items-center">
            <button className="px-5 py-2 font-medium text-sm rounded-full hover:bg-black hover:text-white transition ease-in border-[1px] border-black"><Link target="_blank" to={'https://github.com/hojiakbarsobirov/My-Portfolio'}>GitHub</Link></button>
            <button className="px-4 font-medium  text-sm py-2 rounded-full hover:bg-black hover:text-white transition ease-in border-[1px] border-black">Live Demo</button>
          </div>
        </div>

        <div className="border-[1px] bg-white border-black w-[250px] h-[320px] rounded-2xl p-2">
          <div className=" w-full h-[50%] mb-5 flex justify-center items-center">
            <img className="hover:scale-105 transition ease-in" src={PortfolioImg2} alt="" />
          </div>

          <center className="font-bold text-xl">
            Project Two
          </center>

          <div className="w-full h-[30%] flex justify-around items-center">
            <button className="px-5 py-2 font-medium text-sm rounded-full hover:bg-black hover:text-white transition ease-in border-[1px] border-black"><Link target="_blank" to={'https://github.com/hojiakbarsobirov/Rezume-Project'}>GitHub</Link></button>
            <button className="px-4 font-medium  text-sm py-2 rounded-full hover:bg-black hover:text-white transition ease-in border-[1px] border-black"><Link target="_blank" to={'https://rezume-project.vercel.app/'}>Live Demo</Link></button>
          </div>
        </div>

      </section>
    </>
  );
};

export default PortfolioPage;
