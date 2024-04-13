import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkin from './pages/Checkin'; // Adjust the import path as necessary
import LandingPage from './pages/LandingPage';
import Stats from './pages/Stats';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/checkin"  element={<Checkin />} />
      </Routes>
      <Routes>
        <Route path="/stats" element={<Stats />} />
       
      </Routes>
      <Routes>
        <Route path="/" element={<LandingPage />} />
       
      </Routes>
      </BrowserRouter>
  );
}

export default App; 