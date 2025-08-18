import React from 'react';
import './About.css';
import theme_pattern from '../assets/theme_pattern.svg';
import profile from '../assets/Gunadeep.jpg';

const About = () => {
  return (
    <div className="about">
      {/* Title */}
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>

      {/* Main About Section */}
      <div className="about-sections">
        {/* Left Side - Profile Image */}
        <div className="about-left">
          <img src={profile} alt="Gunadeep" />
        </div>

        {/* Right Side - Description & Skills */}
        <div className="about-right">
          {/* Description */}
          <p className="about-description">
            I’m a passionate MERN Stack Developer dedicated to building dynamic and
            user-friendly web applications. With strong skills in HTML, CSS,
            JavaScript, React.js, Express.js, Node.js, and databases like MongoDB &
            PostgreSQL, I aim to deliver clean, efficient, and impactful solutions.
            I enjoy turning ideas into functional products and continuously learning
            to stay ahead in the tech world.
          </p>

          {/* Skills */}
          <div className="skills-container">
            <div className="skill">
              <span className="skill-name">HTML & CSS</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className="skill">
              <span className="skill-name">React JS</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "95%" }}></div>
              </div>
            </div>

            <div className="skill">
              <span className="skill-name">Express.js & Node.js</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="skill">
              <span className="skill-name">MongoDB & PostgreSQL</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
