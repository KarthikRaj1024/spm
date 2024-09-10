// src/TutorialPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TutorialPage.css"; // Optional: Add styles here

const TutorialPage = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetchTutorials();
  }, []);

  const fetchTutorials = async () => {
    try {
      const res = await axios.get("http://localhost:9000/api/adminTutorials");
      setTutorials(res.data);
    } catch (err) {
      console.error("Failed to fetch tutorials", err);
    }
  };

  return (
    <div className="tutorial-page">
      <h2>Available Tutorials</h2>
      <div className="tutorial-list">
        {tutorials.length === 0 ? (
          <p>No tutorials available at the moment.</p>
        ) : (
          <ul>
            {tutorials.map((tutorial) => (
              <li key={tutorial._id} className="tutorial-item">
                <h3>{tutorial.title}</h3>
                <p>{tutorial.content}</p>
                <p>
                  <strong>Instructor: {tutorial.tutor}</strong>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TutorialPage;
