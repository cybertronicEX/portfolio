import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><Link to="/introduction">Introduction</Link></li>
          <li><Link to="/reflective-journal">Reflective Journal</Link></li>
          <li><Link to="/career-development-plan">Career Development Plan</Link></li>
          <li><Link to="/curriculum-vitae">Curriculum Vitae</Link></li>
          <li><Link to="/certificate">Certificates</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
