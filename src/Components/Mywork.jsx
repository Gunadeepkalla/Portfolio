import React, { useState } from "react";
import "./Mywork.css";
import wotnot1 from "../assets/wotnot.png";
import wotnot2 from "../assets/wotnot2.png";
import wotnot3 from "../assets/wotnot3.png";
import music1 from "../assets/music.png";
import music2 from "../assets/music2.png";
import music3 from "../assets/music3.png";

const Mywork = () => {
  const [modalImage, setModalImage] = useState(null);

  const projects = [
    { img: wotnot1, title: "Wotnot", description: "Vue.js + FastApi project" },
    { img: wotnot2, title: "Wotnot", description: "Wotnot dashboard" },
    { img: wotnot3, title: "Wotnot", description: "Interface of Wotnot" },
    { img: music1, title: "ListenTogether", description: "React.js + Node.js Project" },
    { img: music2, title: "ListenTogether", description: "React.js + Node.js Project" },
    { img: music3, title: "ListenTogether", description: "React.js + Node.js Project" },
  ];

  return (
    <div className="myworks">
      <h1>My Works</h1>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => setModalImage(proj.img)}
          >
            <img src={proj.img} alt={proj.title} />
            <div className="overlay">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="image-modal" onClick={() => setModalImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={modalImage} alt="Enlarged work" className="modal-content" />
        </div>
      )}
    </div>
  );
};

export default Mywork;
