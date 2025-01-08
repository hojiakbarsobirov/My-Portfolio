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
import FooterPage from "./FooterPage";
import GitLogo from '../public/git.png'
import PythonLogo from '../public/python.png'
import AILogo from '../public/suniy-intellekt.png'

const SkillsPage = () => {
  return (
    <>
      <section className="bg-gray-200 w-full h-screen">
        <div className=" w-full h-32 flex justify-center items-center">
          <div className="font-bold text-4xl border-[6px] border-black w-[230px] flex justify-center items-center px-4 py-3">
            SKILLS
          </div>
        </div>

        <div className=" w-full h-20 flex justify-around items-center">
          <h2 className="font-bold text-2xl">USING NOW:</h2>
          <p></p>
        </div>

        <header className="w-full h-[150px] flex justify-center items-center space-x-16">
          <div className="flex justify-center items-center flex-col space-y-2">
            <img className="w-14" src={HTMLlogo} alt="" />
            <p>HTML5</p>
          </div>

          <div className="flex justify-center items-center flex-col space-y-2">
            <img className="w-14" src={CSSlogo} alt="" />
            <p>CSS3</p>
          </div>

          <div className="flex justify-center items-center flex-col space-y-4">
            <img className="w-14" src={JavaScript} alt="" />
            <p>JAVASCRIPT</p>
          </div>

          <div className="flex justify-center items-center flex-col space-y-4">
            <img className="w-14" src={bootstrap} alt="" />
            <p>BOOTSTRAP</p>
          </div>

          <div className="flex justify-center items-center flex-col space-y-4">
            <img className="w-14" src={GitLogo} alt="" />
            <p>GIT</p>
          </div>

          <div className="flex justify-center items-center flex-col space-y-8">
            <img className="w-14" src={Tailwind} alt="" />
            <p>TAILWIND</p>
          </div>

          <div className="flex justify-center items-center flex-col space-y-2">
            <img className="w-14" src={ReactLogo} alt="" />
            <p>React</p>
          </div>

          <div className="flex justify-center items-center flex-col space-y-2">
            <img className="w-14" src={ViteLogo} alt="" />
            <p>Vite</p>
          </div>
        </header>

        <div className=" w-full h-20 flex justify-around items-center">
          <h2 className="font-bold text-2xl">LEARNING:</h2>
          <p></p>
        </div>

        <header className=" w-full h-[150px] flex justify-center space-x-20 items-center">
          <div className="flex justify-center items-center flex-col space-y-2">
            <img className="w-14" src={NodeLogo} alt="" />
            <p>NODE JS</p>
          </div>

          <div className="flex justify-center items-center flex-col space-y-2">
            <img className="w-14" src={Typescript} alt="" />
            <p>TYPESCRIPT</p>
          </div>

          <div className="flex justify-center items-center flex-col space-y-2">
            <img className="w-14" src={AILogo} alt="" />
            <p>AI</p>
          </div>

          <div className="flex justify-center items-center flex-col space-y-2">
            <img className="w-14" src={PythonLogo} alt="" />
            <p>PYTHON</p>
          </div>

          <div className="flex justify-center items-center flex-col space-y-2">
            <img className="w-14" src={ExpressJs} alt="" />
            <p>EXPRESS JS</p>
          </div>
        </header>
      </section>

      <FooterPage />
    </>
  );
};

export default SkillsPage;
