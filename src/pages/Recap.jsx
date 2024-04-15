import "../styling/recap.css";
import React, { useState } from 'react';

const Recap = () => {
  const sampleData = [
    {
      date: "Friday, April 12th, 2024",
      selectedEmoji: "😁",
      restLevel: "Well Rested",
      activity: "Several",
      connection: "Yes",
      stress: "Not Stressed At All",
      selectedOptions: ["Optimistic", "Peaceful", 'Happy'],
      savedInput:  "Today was an amazing turnaround! Waking up knowing all my assignments were submitted felt like a huge weight lifted off my shoulders. I spent the morning catching up on some much-needed rest and then met up with friends for lunch and a movie. It was so refreshing to laugh and enjoy the day without the cloud of deadlines hanging over me. We ended the evening at our favorite hangout spot, celebrating our hard work. I'm feeling optimistic about the upcoming exams now that I've had a chance to recharge. Today was truly a happy day!"
    },
    {
      date: "Wednesday, April 10th, 2024",
      selectedEmoji: "🤯",
      restLevel: "Tired",
      activity: "None",
      connection: "Yes",
      stress: "Extremely Stressed",
      selectedOptions: ["Anxious", "Sad", 'Fearful'],
      savedInput: "Today was just relentless. I woke up already dreading the day ahead because I knew I had three major assignments to submit by midnight. The pressure has been building up, and it feels like it's squeezing all the energy out of me. Despite a brief chat with a friend, which usually helps, I couldn’t shake off the anxiety. Each hour that passed made me more fearful that I wouldn’t finish in time. I managed to complete all the assignments, but at a cost to my mental peace and physical well-being. I’m sad that my days are reduced to ticking boxes and meeting deadlines. It’s just too much sometimes."
    },
    {
      date: "Tuesday, April 9th, 2024",
      selectedEmoji: "😊",
      restLevel: "Fine",
      activity: "A few",
      connection: "Yes",
      stress: "Moderately Stressed",
      selectedOptions: ["Content", "Calm"],
      savedInput: "Today felt like a step in the right direction. I woke up on time and made it to the gym early in the morning, which really helped lift my spirits. After the gym, I attended a couple of classes, and although they were challenging, I felt that I was able to keep up and contribute to the discussions. It was nice to feel that sense of normalcy and engagement again. I had lunch with a friend, which was refreshing and gave me a much-needed break. Throughout the day, I managed to stay calm and content, despite some underlying stress about upcoming exams. Overall, it was a productive and peaceful day."
    },
    {
      date: "Saturday, April 6th, 2024",
      selectedEmoji: "😡",
      restLevel: "Tired",
      activity: "None",
      connection: "No",
      stress: "Extremely Stressed",
      selectedOptions: ["Anxious", "Betrayed", 'Frustrated'],
      savedInput: "Today was just too much. I felt like everything was going wrong right from the morning. I missed my alarm, was late for my online class, and it just set a bad tone for the rest of the day. No one seemed to understand or notice how off I felt. It's like I was invisible. This evening, I tried reaching out to a couple of friends, but everyone was busy. I felt betrayed in a way because I've always been there for them. I ended the day feeling anxious and frustrated, unable to shake off the anger. I need to find better ways to manage days like this."
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(3); 
  // Set entries per page to 3

  // Calculate the indices for the current page entries
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = sampleData.slice(indexOfFirstEntry, indexOfLastEntry);

  // Change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sampleData.length / entriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="recap-container">
      <h2 className="header">Your Recap</h2>
      {currentEntries.map((entry, index) => (
        <div key={index} className="summary-section">
          <h3>{entry.date}</h3>
          <p><strong>Emoji Selected:</strong> {entry.selectedEmoji}</p>
          <p><strong>Rest Level:</strong> {entry.restLevel}</p>
          <p><strong>Activities:</strong> {entry.activity}</p>
          <p><strong>Connection:</strong> {entry.connection}</p>
          <p><strong>Stress Level:</strong> {entry.stress}</p>
          <p><strong>Emotions:</strong> {entry.selectedOptions.join(', ')}</p>
          <p><strong>Additional Thoughts:</strong> {entry.savedInput}</p>
        </div>
      ))}
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} href="#" className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Recap;
