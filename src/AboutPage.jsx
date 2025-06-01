import React from "react";
import logotip from "../public/logotip.png";

const AboutPage = () => {
  return (
    <>
      <section className="bg-gray-200 w-full px-4 py-10">
        <div className="w-full flex justify-center items-center mb-8">
          <div className="font-bold text-3xl sm:text-4xl border-[4px] sm:border-[6px] border-black px-4 py-2 sm:px-6 sm:py-3 text-center">
            ABOUT ME
          </div>
        </div>

        <div className="w-full flex justify-center items-center mb-8">
          <p className="w-full max-w-4xl text-center text-base sm:text-lg px-2">
            Changes occur occasionally in empty spaces. There should be no full
            mismatches. On the other hand, there is harmony with some elements.
            It is necessary to introduce new opportunities instead of words to
            make changes.
          </p>
        </div>

        <div className="w-full flex justify-center items-center mb-6">
          <div className="border-r-2 border-l-2 border-black px-4 font-semibold text-lg sm:text-xl">
            EXPLORE
          </div>
        </div>

        <div className="w-full flex justify-center items-center mb-10">
          <img className="w-24 sm:w-32" src={logotip} alt="Logo" />
        </div>

        <header className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 px-4">
          <div className="w-full max-w-md text-center lg:text-left">
            <h2 className="font-semibold mb-4 text-xl sm:text-2xl">DEVELOPMENT</h2>
            <p className="text-base sm:text-lg">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>

          <div className="w-full max-w-md text-center lg:text-left">
            <h2 className="font-semibold mb-4 text-xl sm:text-2xl">MAINTENANCE</h2>
            <p className="text-base sm:text-lg">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
        </header>

        <div className="w-full flex justify-center items-end mt-12">
          <img className="w-24 sm:w-32" src={logotip} alt="Logo" />
        </div>
      </section>

    </>
  );
};

export default AboutPage;
