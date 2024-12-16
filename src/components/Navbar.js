import React from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">My Portfolio</h1>
    <ul className="nav-links">
      <li><Link to="home" smooth={true}>Home</Link></li>
      <li><Link to="about" smooth={true}>About Me</Link></li>
      <li><Link to="portfolio" smooth={true}>Project</Link></li>
      <li><Link to="skills" smooth={true}>Skills</Link></li>
      <li><Link to="contact" smooth={true}>Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;