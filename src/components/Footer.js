import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">Made with ❤️ by Shivani Hallade  ©️&nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;