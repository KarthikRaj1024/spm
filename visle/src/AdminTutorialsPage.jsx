import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminTutorialsPage = () => {
  const [tutorials, setTutorials] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newTutor, setNewTutor] = useState(""); // Fixed variable name

  useEffect(() => {
    fetchTutorials();
  }, []);

  const fetchTutorials = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/api/tutorial/tutorials"
      );
      setTutorials(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateTutorial = async () => {
    try {
      await axios.post("http://localhost:9000/api/tutorial/tutorials", {
        title: newTitle,
        content: newContent,
        tutor: newTutor,
      });
      fetchTutorials();
      setNewTitle("");
      setNewContent("");
      setNewTutor("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteTutorial = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/api/tutorial/tutorialsd/${id}`);
      fetchTutorials();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateTutorial = async (id) => {
    try {
      await axios.put(`http://localhost:9000/api/tutorial/tutorials/${id}`, {
        title: newTitle,
        content: newContent,
        tutor: newTutor,
      });
      fetchTutorials();
      setNewTitle("");
      setNewContent("");
      setNewTutor("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Manage Tutorials</h2>
      <div className="floating-container">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter tutorial title"
        />
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Enter tutorial content"
        />
        <input
          type="text"
          value={newTutor}
          onChange={(e) => setNewTutor(e.target.value)}
          placeholder="Enter Tutor"
        />
        <button onClick={handleCreateTutorial}>Create Tutorial</button>
      </div>

      <div className="floating-container">
        <ul>
          {tutorials.map((tut) => (
            <li key={tut._id}>
              <h3>{tut.title}</h3>
              <p>{tut.content}</p>
              <p>{tut.tutor}</p>
              <button onClick={() => handleUpdateTutorial(tut._id)}>
                Update
              </button>
              <button onClick={() => handleDeleteTutorial(tut._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminTutorialsPage;
