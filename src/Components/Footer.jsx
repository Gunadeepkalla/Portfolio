import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Side - Branding */}
        <div className="footer-left">
          <h2 className="footer-logo">Gunadeep</h2>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle - Navigation */}
        <div className="footer-middle">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right Side - Socials */}
        <div className="footer-right">
          <a href="https://github.com/Gunadeepkalla" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/GunadeepKalla" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
