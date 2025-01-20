import React from "react";
import FooterIcons from "../public/footer-icons.svg";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <section className="bg-black w-full h-auto p-5 space-x-5 flex justify-center items-center">
      <center>
        <img className="w-5 mb-5" src={FooterIcons} alt="" />

        <p className="text-white font-medium text-sm mb-5">BACK TO TOP</p>

        <div className="flex items-center w-full justify-center space-x-5 mb-5">
        <Link to={'https://www.facebook.com/'}>
        <i className="fa-brands fa-facebook text-white"></i>
        </Link>
          <Link to={'https://uz.linkedin.com/'}>
          <i className="fa-brands fa-linkedin text-white"></i>
          </Link>
          <Link to={'https://www.instagram.com/sobrvkh/'}>
          <i className="fa-brands fa-instagram text-white"></i>
          </Link>
          <Link to={'https://mail.google.com/mail/u/0/#inbox'}>
          <i className="fa-solid fa-envelope text-white"></i>
          </Link>
        </div>

        <div>
          <h1 className="text-white font-medium">
            © 2025 Hojiakbar Sobirov{" "}
            <span className="font-light text-gray-300">All Rights Reserved</span>
          </h1>
        </div>
      </center>
    </section>
  );
};

export default FooterPage;
