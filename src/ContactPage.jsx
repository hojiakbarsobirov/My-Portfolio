import React, { useRef } from "react";
import AxiosInstance from "./AxiosInstance";

const ContactPage = () => {

  const nameRef = useRef('')
  const emailRef = useRef('')
  const phoneRef = useRef('')
  const messageRef = useRef('')

  const createData = async(e) => {
    e.preventDefault()


    const newData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value
    }

    try {
      const response = await AxiosInstance.post('portfolio', newData)
    } catch (err) {
      alert('Error !')
    }
  }

  return (
    
    <section className="bg-gray-200 w-full h-auto p-10">
      <div className=" w-full h-auto p-5 flex justify-center items-center">
        <div className="font-bold text-4xl border-[6px] border-black w-[230px] flex justify-center items-center px-4 py-3">
          CONTACT
        </div>
      </div>

      <div className="w-full h-auto p-10 flex justify-center items-center">
        <p className="sm:w-[70%] text-center">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </p>
      </div>

      <header className=" w-full h-[75vh] flex justify-center items-center">
        <form onSubmit={createData} className=" w-[380px] h-[500px] flex justify-around items-center flex-col">
          <input
          ref={nameRef}
            className="w-[90%] h-12 text-sm border-b-4 border-l-4 pl-4 border-black"
            type="text"
            placeholder="ENTER YOUR NAME*"
          />

          <input
          ref={emailRef}
            className="w-[90%] text-sm h-12 border-b-4 border-l-4 pl-4 border-black"
            type="text"
            placeholder="ENTER YOUR EMAIL*"
          />

          <input
          ref={phoneRef}
            className="w-[90%] text-sm h-12 border-b-4 border-l-4 pl-4 border-black"
            type="number"
            placeholder="PHONE NUMBER"
          />

          <textarea
          ref={messageRef}
            className="w-[90%] h-28 border-b-4 border-l-4 border-black pl-4 text-sm py-2"
            placeholder="YOUR MESSAGE*"
            name=""
            id=""
          ></textarea>

          <div className="w-full flex justify-center items-center">
            <button type="submit" className="font-medium border-r-[3px] border-l-[3px] border-black px-4">
              SUBMIT
            </button>
          </div>
        </form>
      </header>
    </section>
  );
};

export default ContactPage;
