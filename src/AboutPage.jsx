import React from "react";
import logotip from "../public/logotip.png";
import FooterPage from "./FooterPage";

const AboutPage = () => {
  return (
    <>
      <section className="bg-gray-200 w-full h-screen">
        <div className=" w-full h-32 flex justify-center items-center">
          <div className="font-bold text-4xl border-[6px] border-black px-4 py-3">
            ABOUT ME
          </div>
        </div>

        <div className=" w-full h-20 flex justify-center items-center">
          <p className="w-[60%] text-center">
            Changes occur occasionally in empty spaces. There should be no full
            mismatches. On the other hand, there is harmony with some elements.
            It is necessary to introduce new opportunities instead of words to
            make changes.
          </p>
        </div>

        <div className=" w-full h-28 flex justify-center items-center">
          <div className="border-r-2 border-l-2 border-black px-4 font-medium text-xl">
            EXPLORE
          </div>
        </div>

        <div className=" w-full h-12 flex justify-center items-center">
          <img className="w-32" src={logotip} alt="" />
        </div>

        <header className="w-full h-[35%] flex justify-around items-end">
          <div className=" w-[500px] h-[150px]">
            <h2 className="font-medium mb-8 text-2xl">DEVELOPMENT</h2>
            <p>
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>

          <div className=" w-[500px] h-[150px]">
            <h2 className="font-medium mb-8 text-2xl">MAINTENANCE</h2>
            <p>
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
        </header>

        <div className="w-full h-[15%] flex justify-center items-center">
          <img className="w-32" src={logotip} alt="" />
        </div>
      </section>

      <FooterPage />
    </>
  );
};

export default AboutPage;
