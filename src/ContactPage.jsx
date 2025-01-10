import React from "react";

const ContactPage = () => {
  return (
    
    <section className="bg-gray-200 w-full h-auto p-5">
      <div className=" w-full h-auto p-5 flex justify-center items-center">
        <div className="font-bold text-4xl border-[6px] border-black w-[230px] flex justify-center items-center px-4 py-3">
          CONTACT
        </div>
      </div>

      <div className="w-full h-auto p-5 flex justify-center items-center">
        <p className="sm:w-[70%] text-center">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </p>
      </div>

      <header className=" w-full h-[75vh] flex justify-center items-center">
        <form className=" w-[380px] h-[500px] flex justify-around items-center flex-col">
          <input
            className="w-[90%] h-12 text-sm border-b-4 border-l-4 pl-4 border-black"
            type="text"
            placeholder="ENTER YOUR NAME*"
          />

          <input
            className="w-[90%] text-sm h-12 border-b-4 border-l-4 pl-4 border-black"
            type="text"
            placeholder="ENTER YOUR EMAIL*"
          />

          <input
            className="w-[90%] text-sm h-12 border-b-4 border-l-4 pl-4 border-black"
            type="number"
            placeholder="PHONE NUMBER"
          />

          <textarea
            className="w-[90%] h-28 border-b-4 border-l-4 border-black pl-4 text-sm py-2"
            placeholder="YOUR MESSAGE*"
            name=""
            id=""
          ></textarea>

          <div className="w-full flex justify-center items-center">
            <button className="font-medium border-r-[3px] border-l-[3px] border-black px-4">
              SUBMIT
            </button>
          </div>
        </form>
      </header>
    </section>
  );
};

export default ContactPage;
