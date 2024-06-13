// CurriculumVitae.js

import React from 'react';
import CV from '../assets/CV.pdf'; // Replace with the actual path to your PDF file
import CVImage from '../assets/CV.png'; // Replace with the actual path to your CV image file
import '../styles/CurriculumVitae.css';

const CurriculumVitae = () => {
  const handleDownload = () => {
    // Function to handle the download button click
    window.open(CV, '_blank'); // Opens the PDF in a new tab/window for download
  };

  return (
    <div className="cv-container">
      <h2>Curriculum Vitae</h2>
      <p>
        Welcome to my Curriculum Vitae page! Here, you can explore my professional journey,
        skills, qualifications, and accomplishments in detail. This document summarizes my
        educational background, work experience, certifications, and any other relevant
        information that showcases my career path and expertise.
      </p>
      <p>
        Feel free to download the PDF version of my CV using the button below. If you have any
        inquiries or would like to discuss potential opportunities, please don't hesitate to
        reach out to me via email or LinkedIn.
      </p>
      <div className="preview-container">
        <div className="thumbnail-preview">
          <img src={CVImage} alt="Curriculum Vitae Thumbnail" className="blurred-thumbnail" />
        </div>
        <div className="download-button">
          <button onClick={handleDownload}>Open CV</button>
        </div>
      </div>
    </div>
  );
};

export default CurriculumVitae;
