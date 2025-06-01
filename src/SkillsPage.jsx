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
import GitLogo from "../public/git.png";
import PythonLogo from "../public/python.png";
import AILogo from "../public/suniy-intellekt.png";

const SkillsPage = () => {
  return (
    <>
      <section className="bg-gray-200 w-full px-2 py-10 xl:px-10">
        {/* Title */}
        <div className="w-full flex justify-center items-center mb-10">
          <div className="font-bold text-3xl sm:text-4xl border-[4px] sm:border-[6px] border-black px-6 py-3 text-center">
            SKILLS
          </div>
        </div>

        {/* Using Now */}
        <div className="w-full mb-6 flex justify-center xl:pl-14 sm:justify-start">
          <h2 className="font-bold text-xl sm:text-2xl">USING NOW:</h2>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-8">
          {[
            { icon: HTMLlogo, label: "HTML5" },
            { icon: JavaScript, label: "JS" },
            { icon: CSSlogo, label: "CSS3" },
            { icon: bootstrap, label: "Bootstrap" },
            { icon: GitLogo, label: "Git" },
            { icon: Tailwind, label: "Tailwind" },
            { icon: ReactLogo, label: "React" },
            { icon: ViteLogo, label: "Vite" },
          ].map(({ icon, label }, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 px-4 py-2 w-36 sm:w-40 bg-white shadow-md rounded-xl"
            >
              <img className="w-6 sm:w-7" src={icon} alt={label} />
              <p className="font-medium text-sm sm:text-base">{label}</p>
            </div>
          ))}
        </div>

        {/* Learning */}
        <div className="w-full mt-12 mb-6 flex justify-center sm:justify-start xl:pl-14">
          <h2 className="font-bold text-xl sm:text-2xl">LEARNING:</h2>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-8">
          {[
            { icon: NodeLogo, label: "Node" },
            { icon: PythonLogo, label: "Python" },
            { icon: Typescript, label: "TS" },
            { icon: AILogo, label: "AI" },
            { icon: ExpressJs, label: "Express" },
          ].map(({ icon, label }, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 px-4 py-2 w-36 sm:w-40 bg-white shadow-md rounded-xl"
            >
              <img className="w-6 sm:w-7" src={icon} alt={label} />
              <p className="font-medium text-sm sm:text-base">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
