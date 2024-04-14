import React from "react";
import { Link } from "react-router-dom";
import "../styling/CheckinConfirmation.css"; // Path to your CSS file for styling

const CheckinConfirmation = () => {
  return (
    <div className="confirmation-container">
      <div className="inner-container">
        <h2>Your entry for today was submitted</h2>
        <div className="check-mark-circle">✔️</div>
        <Link to="/recap" className="home-button">
          View Your Recap
        </Link>
      </div>
    </div>
  );
};

export default CheckinConfirmation;
