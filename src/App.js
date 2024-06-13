import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Introduction from './components/Introduction';
import ReflectiveJournal from './components/ReflectiveJournal';
import CareerDevelopmentPlan from './components/CareerDevelopmentPlan';
import CurriculumVitae from './components/CurriculumVitae';
import Certificate from './components/Certificate';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
    
        <Routes>
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/reflective-journal" element={<ReflectiveJournal />} />
          <Route path="/career-development-plan" element={<CareerDevelopmentPlan />} />
          <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/" element={<Introduction />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
