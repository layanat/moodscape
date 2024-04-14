
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import "../styling/stats.css";

const Stats = () => {
  const [month, setMonth] = useState("April");
  const emojiCounts = {
    "😊": 10,
    "😔": 3,
    "😡": 2,
    "🥳": 4,
  };
  const emotions = {
    Happy: 12,
    Sad: 5,
    Excited: 7,
    Frustrated: 3,
    Content: 8,
    Anguished: 2,
    Curious: 6,
    Nervous: 4,
    Relieved: 9,
    Anxious: 5,
    Indifferent: 1,
  };

  const data = {
    labels: Object.keys(emojiCounts),
    datasets: [
      {
        label: "# of Emojis",
        data: Object.values(emojiCounts),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const changeMonth = (direction) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentIndex = months.indexOf(month);
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % months.length
        : (currentIndex - 1 + months.length) % months.length;
    setMonth(months[nextIndex]);
  };

  return (
    <div className="stats-page">
      <h2 className="page-header">Your Stats</h2>
      <div className="cards-container">
        <div className="card-stats">
          <h2>Mood Stats for {month}</h2>
          <div className="month-navigation">
            <button onClick={() => changeMonth("prev")}>←</button>
            <span>{month}</span>
            <button onClick={() => changeMonth("next")}>→</button>
          </div>
          <Doughnut data={data} options={{ cutout: "50%" }} />
          <div className="emoji-stats">
            {Object.entries(emojiCounts).map(([emoji, count]) => (
              <div key={emoji} className="emoji-count">
                {emoji}
                <span className="count">{count}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card-stats">
          <h2>Emotion Stats Overview</h2>
          <div className="emotion-stats">
            {Object.entries(emotions).map(([emotion, count], index) => (
              <button key={index} className="emotion-button">
                {emotion} <span className="count-badge">{count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
