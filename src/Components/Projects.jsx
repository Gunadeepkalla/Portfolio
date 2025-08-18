import React from 'react'
import './Projects.css';

const Projects = () => {
    const projectData = [
        {
            title: "Wotnot",
            description: "WotNot is a custom-built conversational chatbot platform developed with Vue.js and Python FastAPI. It enables real-time, automated interactions for customer support and lead generation. The platform features a responsive UI, efficient API integrations, and a robust backend to handle concurrent user conversations seamlessly.",
            link: "https://wotnot.pixeltests.com",
            image:'../assets/wotnot.png',
        },
      {
    title: "ListenMusicTogether",
    description: "Listen-Together is a real-time music sharing platform where friends can listen to the same track in sync, chat, and enjoy music together from anywhere.",
    link: "https://listentogther1.onrender.com",
    image: '../assets/music.png'
},

        {
            title: "Portfolio",
            description: "This portfolio website showcases my projects and skills, built with React and Tailwind CSS. It features a responsive design, smooth animations, and a clean layout to highlight my work effectively.",
            link:"underProgress",
        }
    ];
  return (
    <div className="projects">
        <h1 className="projects-title">Projects</h1>
         <div className="projects-container">
            {projectData.map((project, index) => (
                <div className="project-card" key={index}>
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h2 className='project-title'>{project.title}</h2>
                    <p className="project-desc">{project.description}</p>
                    <a href={project.link} target='blank' rel="noopener noreferrer" className="project-btn">View Project</a>
             </div>
            ))}
      </div>
    </div>
  );
};


export default Projects
