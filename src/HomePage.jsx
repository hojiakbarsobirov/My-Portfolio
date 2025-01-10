import React from "react";
import FooterPage from "./FooterPage";
import SectionPage from "./SectionPage";

const HomePage = () => {
  return (
    <>
    <SectionPage/>
      <section className="bg-gray-200 w-full h-auto flex justify-center items-center">
        <header className='bg-[url("/public/Background.png")] text-white px-10 w-full h-auto p-5 space-y-5 bg-cover bg-center flex justify-around items-start flex-col'>
          <h2 className="font-medium text-xl">IT BARRIES</h2>

          <p className="w-[80%]">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est. Morbi commodo, eros in
            dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
            tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
            Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
            varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
            tempor, accumsan nec eros.{" "}
          </p>

          <button className="border-r-[3px] border-l-[3px] px-4 border-white">
            READ MORE
          </button>
        </header>
      </section>

      <FooterPage/>
    </>
  );
};

export default HomePage;
