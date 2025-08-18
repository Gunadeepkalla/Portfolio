import React from 'react';
import './Hero.css';
import profile from '../assets/Gunadeep.jpg';

const Hero = () => {
  return (
    
    <div className="hero">
      <img src={profile} alt="Gunadeep Kalla" />
      <h1>
        <span>I'm Gunadeep Kalla</span> MERN STACK DEVELOPER Based in India
      </h1>
      <p className="hero-description">
        I specialize in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
        Passionate about clean code, seamless user experiences, and solving real-world problems through innovative digital products.
      </p>

      {/* Wrap buttons inside this container */}
      <div className="hero-buttons">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
