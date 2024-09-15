import React, { useState } from 'react';
import CV from '../assets/CV.pdf'; // Replace with the actual path to your PDF file
import CVImage from '../assets/CV.jpg'; // Replace with the actual path to your CV image file
import '../styles/CurriculumVitae.css';

const CurriculumVitae = () => {
  const [imageLoading, setImageLoading] = useState(true); // State to track image loading

  const handleImageLoad = () => {
    setImageLoading(false); // Set loading state to false once image is loaded
  };

  const handleDownload = () => {
    // Function to handle the download button click
    window.open(CV, '_blank'); // Opens the PDF in a new tab/window for download
  };

  return (
    <div className="cv-container">
      <h2>Curriculum Vitae - CV</h2>
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
        {imageLoading && (
          <div className="spinner"></div>
        )} 
          <div className="thumbnail-preview">
            <img
              src={CVImage}
              alt="Curriculum Vitae Thumbnail"
              className="blurred-thumbnail"
              style={{ display: imageLoading ? 'none' : 'block' }}
              onLoad={handleImageLoad}
            />
          </div>
        <div className="download-button">
          <button onClick={handleDownload}>View CV</button>
        </div>
      </div>
    </div>
  );
};

export default CurriculumVitae;
