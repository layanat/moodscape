import React, { useState } from "react";
import "../styling/checkin.css";
const Checkin = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [restLevel, setRestLevel] = useState("");
  const [activity, setActivity] = useState("");
  const [connection, setConnection] = useState("");
  const [stress, setStress] = useState("");
  const [selfCareCompleted, setSelfCareCompleted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [savedInput, setSavedInput] = useState("");
  const [options, setOptions] = useState([
    "Frustrated",
    "Anguished",
    "Content",
    "Sad",
    "Happy",
    "Excited",
    "Nervous",
    "Calm",
    "Disappointed",
    "Fearful",
    "Optimistic",
    "Curious",
    "Relieved",
    "Anxious",
    "Indifferent",
    "Angry",
    "Confused",
    "Peaceful",
    "Zenned",
    "Betrayed",
    "Exhausted",
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const emojis = ["😊", "😔", "😡", "😁", "😭", "😕", "😴", "🥳", "🤯"]; // Your emoji list

  const handleChange = (event) => {
    setSelectedEmoji(event.target.value);
  };
  const handleRestLevelClick = (level) => {
    setRestLevel(level);
  };
  const handleActivityClick = (activity) => {
    setActivity(activity);
  };
  const handleConnection = (connection) => {
    setConnection(connection);
  };
  const handleStress = (stress) => {
    setStress(stress);
  };
  const handleCompletedSelfCare = () => {
    setSelfCareCompleted(true);
  };
  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };
  const handleSaveInput = (event) => {
    event.preventDefault();
    setSavedInput(userInput); // Save the current input state
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Assuming you handle saving the user input and other actions here
    // For demonstration, we simply alert the saved input
    alert(`Submitting Today's Entry. `);
    // Here you'd also handle other parts of the form, such as emoji and rest level
  };
  const selectOption = (option) => {
    setSelectedOptions([...selectedOptions, option]);
    setOptions(options.filter((o) => o !== option));
  };
  const deselectOption = (option) => {
    setOptions([...options, option]);
    setSelectedOptions(selectedOptions.filter((o) => o !== option));
  };

  return (
    <div>
      <h2 className="header">Check In with Yourself</h2>
      <div className="card">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="emojiSelect">
            What emoji best represents your day?
          </label>
          <br />
          <select
            id="emojiSelect"
            value={selectedEmoji}
            onChange={handleChange}
          >
            <option value="">Select an Emoji</option>
            {emojis.map((emoji, index) => (
              <option key={index} value={emoji}>
                {emoji}
              </option>
            ))}
          </select>
        </form>

        <p>
          Selected Emoji: <label className="emoji-text"> {selectedEmoji}</label>
        </p>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="card">
          <p>How well rested do you feel today?</p>
          <div className="button-group">
            <button onClick={() => handleRestLevelClick("Well Rested")}>
              Well Rested
            </button>
            <button onClick={() => handleRestLevelClick("Tired")}>Tired</button>
            <button onClick={() => handleRestLevelClick("Fine")}>Fine</button>
          </div>
          <p>You feel: {restLevel}</p>
        </div>
      </form>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="card">
          <p>Have you done any activities that you enjoyed today?</p>
          <div className="button-group">
            <button onClick={() => handleActivityClick("Several")}>
              Several
            </button>
            <button onClick={() => handleActivityClick("A few")}>A few</button>
            <button onClick={() => handleActivityClick("None")}>None</button>
          </div>
          <p>You've done: {activity}</p>
        </div>
      </form>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="card">
          <p>Were you able to have a connection with someone today?</p>
          <div className="button-group">
            <button onClick={() => handleConnection("Yes")}>Yes</button>
            <button onClick={() => handleConnection("Unsure")}> Unsure</button>
            <button onClick={() => handleConnection("No")}>No</button>
          </div>
          <p>Your answer: {connection}</p>
        </div>
      </form>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="card">
          <p>How would you describe your stress levels for the day?</p>
          <div className="button-group">
            <button onClick={() => handleStress("Extremely Stressed")}>
              Extremely Stressed
            </button>
            <button onClick={() => handleStress("Moderately Stressed")}>
              {" "}
              Moderately Stressed
            </button>
            <button onClick={() => handleStress("A little Stressed")}>
              A little Stressed
            </button>
            <button onClick={() => handleStress("Not Stressed At All")}>
              Not Stressed At All
            </button>
          </div>
          <p>Today you were: {stress}</p>
        </div>
      </form>

      <div className="card">
        <p>
          What is it that your mind or body needs right now? You could take this
          moment to go ahead and do it and come back when you are done. It is
          completely okay if you are not able to do it.
        </p>
        {selfCareCompleted ? (
          <p>Self-care completed! 🎉</p> // Display this message instead of the button once completed
        ) : (
          <div className="button-group">
            <button type="button" onClick={handleCompletedSelfCare}>
              I Completed my self-care
            </button>
          </div>
        )}
      </div>
      <div className="card">
        <p>What other emotions do you feel today</p>
        <div className="selected-container">
          {selectedOptions.length > 0 ? (
            selectedOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => deselectOption(option)}
                className="selected-button"
              >
                {option}
              </button>
            ))
          ) : (
            <p>No options selected.</p>
          )}
        </div>
        <div className="options-container">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => selectOption(option)}
              className="option-button"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="card">
        <form onSubmit={handleSaveInput}>
          <p>
            If you would like to go deeper and write additional thoughts, you
            can do so here.
          </p>
          {savedInput ? (
            <div>
              <p>Saved Thoughts:</p>
              <p>{savedInput}</p>
              <div className="button-group">
                <button type="button" onClick={() => setSavedInput("")}>
                  Edit
                </button>{" "}
              </div>
            </div>
          ) : (
            <>
              <textarea
                value={userInput}
                onChange={handleUserInputChange}
                placeholder="Enter your thoughts here..."
              ></textarea>
              <div className="button-group">
                <button type="submit">Save</button>
              </div>
            </>
          )}
        </form>
      </div>
      <div className="submit-card">
        <button type="submit" onClick={handleSubmit}>
          Submit Today's Entry
        </button>
      </div>
    </div>
  );
};
export default Checkin;
