import React from "react";
import FooterPage from "./FooterPage";

const PortfolioPage = () => {
  return (
    <>
      <div className="bg-gray-200 w-full h-32 flex justify-center items-center">
        <div className="font-bold text-4xl border-[6px] border-black w-[230px] flex justify-center items-center px-4 py-3">
          PORTFOLIO
        </div>
      </div>
      <section className="bg-gray-200 w-full h-screen"></section>

      <FooterPage/>
    </>
  );
};

export default PortfolioPage;
