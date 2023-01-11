import React from "react";
import logo from "../../../assets/icon.png";
const Footer = () => {
  return (
    <div className="mt-9">
        <footer className="footer footer-center p-10 bg-stone-800 text-white">
      <div>
        <img
          width="50"
          height="50"
          viewBox="0 0 24 24"
          className="rounded-full"
          src={logo}
          alt=" "
        />
        <p className="font-bold">
          Emigration-Hook Ltd. <br />
          Providing reliable services since 2001
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
