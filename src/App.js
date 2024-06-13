import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Introduction from './components/Introduction';
import ReflectiveJournal from './components/ReflectiveJournal';
import CareerDevelopmentPlan from './components/CareerDevelopmentPlan';
import CurriculumVitae from './components/CurriculumVitae';
import Certificate from './components/Certificate';
import './App.css';
import BackgroundSVG from './assets/Asset.svg'; // Import the SVG file

const App = () => {
  return (
    <Router>
      <div className="App">
      <div className="background-animation">
          <img src={BackgroundSVG} alt="background" className="svg-background" />
        </div>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/reflective-journal" element={<ReflectiveJournal />} />
            <Route path="/career-development-plan" element={<CareerDevelopmentPlan />} />
            <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/" element={<Introduction />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
