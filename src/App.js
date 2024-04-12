import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkin from './pages/Checkin'; // Adjust the import path as necessary

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/checkin"  element={<Checkin />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App; 