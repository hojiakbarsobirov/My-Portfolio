import React from "react";
import HTMLlogo from "../public/html-logo.svg";
import CSSlogo from "../public/css-logo.svg";
import JavaScript from "../public/javascript.svg";
import bootstrap from "../public/bootstrap.png";
import Tailwind from "../public/tailwind-logo.svg";
import ReactLogo from "../public/react-logo.png";
import ViteLogo from "../public/vite-logo.png";
import NodeLogo from "../public/node-js.png";
import Typescript from "../public/typescript.png";
import ExpressJs from "../public/express-js.svg";
import GitLogo from '../public/git.png'
import PythonLogo from '../public/python.png'
import AILogo from '../public/suniy-intellekt.png'

const SkillsPage = () => {
  return (
    <>
      <section className="bg-gray-200 w-full h-auto py-10">
        <div className=" w-full h-32 flex justify-center items-center">
          <div className="font-bold text-4xl border-[6px] border-black w-[230px] flex justify-center items-center px-4 py-3">
            SKILLS
          </div>
        </div>

        <div className=" w-full h-20 flex justify-around items-center">
          <h2 className="font-bold text-2xl">USING NOW:</h2>
          <p></p>
        </div>

        <header className="w-full h-auto  px-3 py-2 flex flex-wrap justify-center items-center flex-1 gap-10">
          <div className="flex justify-center items-center space-x-2 rounded-xl shadow-lg px-4 py-2">
            <img className="w-8" src={HTMLlogo} alt="" />
            <p className="font-medium text-sm">HTML5</p>
          </div>

          <div className="flex justify-center items-center px-3 py-2 shadow-lg rounded-xl space-x-3">
            <img className="w-10" src={JavaScript} alt="" />
            <p className="font-medium">JAVASCRIPT</p>
          </div>

          <div className="flex justify-center items-center space-x-2 px-3 py-2 rounded-xl shadow-lg">
            <img className="w-10" src={CSSlogo} alt="" />
            <p className="font-medium">CSS3</p>
          </div>

          <div className="flex justify-center items-center px-4 py-3 shadow-lg rounded-xl space-x-3">
            <img className="w-10" src={bootstrap} alt="" />
            <p className="font-medium">BOOTSTRAP</p>
          </div>

          <div className="flex justify-center items-center shadow-lg  px-5 py-3 rounded-xl space-x-3">
            <img className="w-10" src={GitLogo} alt="" />
            <p className="font-medium">GIT</p>
          </div>

          <div className="flex justify-center items-center px-5 py-4 shadow-lg rounded-xl space-x-3">
            <img className="w-10" src={Tailwind} alt="" />
            <p className="font-medium">TAILWIND</p>
          </div>

          <div className="flex justify-center items-center px-5 py-3 shadow-lg rounded-xl space-x-2">
            <img className="w-10" src={ReactLogo} alt="" />
            <p className="font-medium">React</p>
          </div>

          <div className="flex justify-center items-center px-5 py-3 shadow-lg rounded-xl space-x-2">
            <img className="w-10" src={ViteLogo} alt="" />
            <p className="font-medium">Vite</p>
          </div>
        </header>

        <div className=" w-full h-20 flex justify-around items-center">
          <h2 className="font-bold text-2xl">LEARNING:</h2>
          <p></p>
        </div>

        <header className="w-full h-auto p-5 flex flex-wrap justify-center items-center gap-10">

          <div className="flex justify-center items-center px-3 py-2 shadow-lg rounded-xl space-x-2">
            <img className="w-10" src={NodeLogo} alt="" />
            <p className="font-medium">NODE JS</p>
          </div>

          <div className="flex justify-center items-center px-3 py-2 shadow-lg rounded-xl space-x-2">
            <img className="w-10" src={PythonLogo} alt="" />
            <p className="font-medium">PYTHON</p>
          </div>

          <div className="flex justify-center items-center px-5 py-3 shadow-lg rounded-xl space-x-2">
            <img className="w-10" src={Typescript} alt="" />
            <p className="font-medium">TYPESCRIPT</p>
          </div>

          <div className="flex justify-center items-center px-6 py-3 shadow-lg rounded-xl space-x-2">
            <img className="w-10" src={AILogo} alt="" />
            <p className="font-medium">AI</p>
          </div>

          <div className="flex justify-center items-center px-4 py-3 shadow-lg rounded-xl space-x-2">
            <img className="w-10" src={ExpressJs} alt="" />
            <p className="font-medium">EXPRESS JS</p>
          </div>
        </header>
      </section>
    </>
  );
};

export default SkillsPage;
