import React from "react";
import "../styling/LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className="background-container">
        <div className="card2-container">
          <div className="small-card">
            <h2 className="landingpage">MoodScape</h2>
            <p className="lptext1">
              {" "}
              Enhance your emotional awareness with personalized journaling.
            </p>
            <div className="btndiv">
              <Link to="/signup" className="btn">
                {" "}
                Sign Up
              </Link>
              <Link to="/login" className="btn" style={{ marginLeft: "50px" }}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="about-us">
        <div className="about-us-content">
          <h3 className="aboutush3"> About MoodScape</h3>
          <div className="line-div">
            <div className="green-line"></div>
          </div>
          <p className="aboutusp">
            Discover how MoodScape can transform your daily journaling habits
          </p>

          <div className="cards2">
            <div className="card2">
              <h5 className="card-title2">Track Your Mood</h5>
              <p>
                {" "}
                Log daily emotions and activities to monitor trends and triggers
                in your emotional health.
              </p>
            </div>

            <div className="card2">
              <h5 className="card-title2">Check in </h5>
              <p>
                Simply answer quick and easy questions to check in with yourself
              </p>
            </div>

            <div className="card2">
              <h5 className="card-title2"> Stats </h5>
              <p>Get an overview of your progress and patterns!</p>
            </div>
          </div>
        </div>
      </section>
      <div></div>
    </div>
  );
};

export default LandingPage;
