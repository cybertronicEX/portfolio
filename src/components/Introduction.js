import React, { useState, useEffect } from 'react';
import '../styles/Introduction.css';
import ProfilePic from '../assets/profilepic.jpg';

const skills = [
  'Problem solving',
  'Testing Debugging',
  'Version controlling',
  'Responsive designing',
  'Code Optimization',
  'Cross-browser Compatibility',
  'UX/UI Design',
  'React Development',
  'API Integration',
  'Agile Methodologies'
];

const Introduction = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  // Function to go to the previous skill
  const handlePrevious = () => {
    setCurrentSkill((prevSkill) => (prevSkill - 1 + skills.length) % skills.length);
  };

  // Function to go to the next skill
  const handleNext = () => {
    setCurrentSkill((prevSkill) => (prevSkill + 1) % skills.length);
  };

  // Automatically rotate between skills every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

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
          <p>I am committed to establishing a strong foundation in the IT industry, with a keen grasp of FrontEnd Development. My focus is on developing proficiency in Fullstack Development, aiming to contribute effectively to projects and teams while continuing to expand my skills and knowledge.</p>
        </div>
        <div className="skills-slider">
          <h3>Skills</h3>
          <div className="slider">
            <button onClick={handlePrevious} className="slider-button">←</button>
            <div className="skill current">{skills[currentSkill]}</div>
            <button onClick={handleNext} className="slider-button">→</button>
          </div>
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
