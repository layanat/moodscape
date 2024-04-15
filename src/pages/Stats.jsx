import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import "../styling/stats.css";
/**
 * Stats component to display statistics based on emoji and emotion counts.
 * The component allows navigation through months to view different statistics.
 */
const Stats = () => {
  // State for currently selected month

  const [month, setMonth] = useState("April");
  // Static data for emoji counts
  const emojiCounts = {
    "😊": 1,
    "🤯": 2,
    "😡": 1,
    "😁": 3,
    "🥳": 1,
  };
  // Static data for counts of various emotions
  const emotions = {
    Happy: 5,
    Anxious: 3,
    Optimistic: 2,
    Calm: 2,
    Excited: 2,
    Peaceful: 1,
    Zenned: 1,
    Sad: 1,
    Fearful: 1,
    Content: 1,
    Frustrated: 1,
    Confused: 1,
    Relieved: 1,
  };
  // Data structure for the Doughnut chart from Chart.js
  const data = {
    labels: Object.keys(emojiCounts),
    datasets: [
      {
        label: "# of Emojis",
        data: Object.values(emojiCounts), // Data points for the chart, derived from emoji values
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Colors for each segment
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Hover colors for each segment
        circumference: 180, // The circumference of the doughnut chart
        rotation: 270, // Rotation of the doughnut chart
      },
    ],
  };
  /**
   * Changes the currently displayed month based on user interaction.
   * @param {string} direction - Indicates the direction to navigate ('next' or 'prev')
   */
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
    const currentIndex = months.indexOf(month); // Find current month index
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % months.length // Calculate next index for 'next' direction
        : (currentIndex - 1 + months.length) % months.length; // Calculate next index for 'prev' direction
    setMonth(months[nextIndex]); // Set the new month based on calculated index
  };

  return (
    <div className="stats-page">
      <h2 className="page-header">Your Stats</h2>
      <div className="cards-container">
        <div className="card-stats">
          <h3>Mood Stats for {month}</h3>
          <br></br>
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
          <h3>Emotions Overview</h3> <br></br>
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
