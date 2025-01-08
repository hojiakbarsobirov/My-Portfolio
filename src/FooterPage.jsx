import React from "react";
import FooterIcons from "../public/footer-icons.svg";
import Facebook from "../public/facebook-icons.svg";
import FooterIn from "../public/footer-in.svg";
import FooterInsta from "../public/footer-insta.svg";
import FooterEmail from "../public/footer-email.svg";

const FooterPage = () => {
  return (
    <section className="bg-black w-full h-[35vh] flex justify-center items-center">
      <center>
        <img className="w-5 mb-5" src={FooterIcons} alt="" />

        <p className="text-white font-medium text-sm mb-5">BACK TO TOP</p>

        <div className="flex items-center w-full justify-center space-x-5 mb-5">
          <img className="w-5" src={Facebook} alt="" />
          <img className="w-5" src={FooterIn} alt="" />
          <img className="w-5" src={FooterInsta} alt="" />
          <img className="w-5" src={FooterEmail} alt="" />
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
