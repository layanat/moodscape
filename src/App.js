import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { NavBar } from "./navbar";
import Checkin from './pages/Checkin';
import Stats from './pages/Stats';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/checkin" element={<Checkin />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
  );
}

export default App;
