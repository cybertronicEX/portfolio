import React from 'react';
import '../styles/Introduction.css';
import ProfilePic from '../assets/profilepic.jpg'

const Introduction = () => {
  return (
    <section id="introduction" key="introduction">
      <div className="container">
        <h2>Introduction</h2>
        <div className="bio">
          <img src={ProfilePic} alt="Your Name" className="profile-photo"/>
          <div className="bio-content">
            <p>Hello! I am Visal, a dedicated Software Engineer specializing in Front-end Development with a strong passion for crafting sophisticated web applications. I bring nearly a year of focused experience in the field, adept at leveraging cutting-edge technologies to deliver intuitive user interfaces and seamless user experiences.</p>
          </div>
        </div>
        <div className="professional-summary">
          <h3>Professional Summary</h3>
          <p>I am committed to establishing a strong foundation in IT industry, with a keen grasp of FrontEnd Development. My focus is on developing proficiency in Fullstack Development, aiming to contribute effectively to projects and teams while continuing to expand my skills and knowledge.</p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>Problem solving</li>
            <li>Testing Debugging</li>
            <li>Version controlling</li>
            <li>Responsive designing</li>

          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:visaldeminda@gmail.com">visaldeminda@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/visal-gunarathne-592481248/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/visal-gunarathne-592481248/</a></p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
