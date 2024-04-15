import React, { useState } from "react";
import "../styling/checkin.css";
import { useNavigate } from "react-router-dom";

/**
 * Component to handle daily check-ins where users can record their feelings and activities.
 */
const Checkin = () => {
  const navigate = useNavigate();
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [restLevel, setRestLevel] = useState("");
  const [activity, setActivity] = useState("");
  const [connection, setConnection] = useState("");
  const [stress, setStress] = useState("");
  const [selfCareCompleted, setSelfCareCompleted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [savedInput, setSavedInput] = useState("");
  const [options, setOptions] = useState([
    // List of emotions or feelings a user can select from
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
  const emojis = ["😊", "😔", "😡", "😁", "😭", "😕", "😴", "🥳", "🤯"]; // Predefined list of emojis for selection
  /**
   * Updates the selected emoji state based on the user's selection.
   * @param {Object} event - The event object from the select input change.
   *
   * This function sets the `selectedEmoji` state to the value selected by the user in the emoji dropdown menu.
   */
  const handleChange = (event) => {
    setSelectedEmoji(event.target.value);
  };
  /**
   * Updates the rest level state based on the user's click on a specific button.
   * @param {string} level - The rest level selected by the user.
   *
   * This function sets the `restLevel` state to the level passed to it when a user clicks one of the rest level buttons.
   */
  const handleRestLevelClick = (level) => {
    setRestLevel(level);
  };
  /**
   * Updates the activity state based on the user's click on a specific button.
   * @param {string} activity - The activity type selected by the user.
   *
   * This function sets the `activity` state to the activity passed to it when a user clicks one of the activity buttons.
   */
  const handleActivityClick = (activity) => {
    setActivity(activity);
  };
  /**
   * Updates the connection state based on the user's click on a specific button.
   * @param {string} connection - The connection option selected by the user.
   *
   * This function sets the `connection` state to the status passed to it when a user clicks one of the connection buttons.
   */
  const handleConnection = (connection) => {
    setConnection(connection);
  };

  /**
   * Updates the stress level state based on the user's click on a specific button.
   * @param {string} stress - The stress level selected by the user.
   *
   * This function sets the `stress` state to the level passed to it when a user clicks one of the stress level buttons.
   */
  const handleStress = (stress) => {
    setStress(stress);
  };
  /**
   * Sets the self-care completion status to true when the user clicks the self-care button.
   *
   * This function is triggered when the "I Completed my self-care" button is clicked, marking the self-care activity as completed.
   */
  const handleCompletedSelfCare = () => {
    setSelfCareCompleted(true);
  };
  /**
   * Updates the user input state based on what the user types into the textarea.
   * @param {Object} event - The event object from the textarea input change.
   *
   * This function sets the `userInput` state to the current value of the textarea, reflecting what the user has typed.
   */
  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };
  /**
   * Prevents form submission from reloading the page and saves the current user input into the savedInput state.
   * @param {Object} event - The event object from the form submission.
   *
   * This function prevents the default form submission behavior and sets the `savedInput` state to the current `userInput` value.
   */
  const handleSaveInput = (event) => {
    event.preventDefault();
    setSavedInput(userInput); // Saves the current input state on form submission
  };
  /**
   * Handles the submission of the entire form, saving user data and navigating to a confirmation page.
   * @param {Object} event - The event object from the submit button click.
   *
   * This function prevents the default form submission behavior, potentially saves user input, and uses the `navigate` function to redirect the user to the check-in confirmation page.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/checkin-confirmation"); // Redirects to confirmation page after submitting the form
  };
  /**
   * Handles the selection of an option from the available options list.
   * @param {string} option - The option selected by the user.
   *
   * This function updates two state variables: `selectedOptions` and `options`.
   * - `selectedOptions`: Adds the selected option to the array of already selected options.
   * - `options`: Filters out the selected option from the array of available options,
   *   effectively moving the option from available to selected status.
   */
  const selectOption = (option) => {
    setSelectedOptions([...selectedOptions, option]);
    setOptions(options.filter((o) => o !== option));
  };
  /**
   * Handles the deselection of an option from the selected options list.
   * @param {string} option - The option deselected by the user.
   *
   * This function updates two state variables: `selectedOptions` and `options`.
   * - `options`: Adds the deselected option back to the array of available options.
   * - `selectedOptions`: Filters out the deselected option from the array of currently selected options,
   *   effectively moving the option from selected back to available status.
   */
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
