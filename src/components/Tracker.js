import "../style/Tracker.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";

const Tracker = ({
  exercisesData,
  getAllExercises,
  baseURL,
  currentUser,
  handleShow,
  getUserEntries,
}) => {

  const [submittedExercises, setSubmittedExercises] = useState([]);
  
  const [newEntry, setNewEntry] = useState({
    date: "",
    sets: "",
    reps_or_mins: "",
    user: currentUser.id,
    exercise: "",
  });

// Calls prop to fetch all exercises when the component mounts and updates exercisesData state
  useEffect(() => getAllExercises(), []);

// Maps over exerciseData to generate table rows for each exercise
  const exerciseInfo = () => {
    
    return exercisesData.map((exerciseData, index) => (
      <tr key={exerciseData.id}>
        {/* Display an exercise name in each table row */}  
        <td>{exerciseData.name}</td>
        {/* Input fields for date */}
        <td className="input-text">
          <input
            type="text"
            onChange={(event) =>
              setNewEntry({
                ...newEntry,
                date: event.target.value,
                exercise: exerciseData.id,
                user: currentUser.id,
              })
            }
            onClick={!currentUser.name ? handleShow : null}
          ></input>
        </td>
        {/* Input fields for sets */}
        <td className="input-text">
          <input
            type="text"
            onChange={(event) =>
              setNewEntry({ ...newEntry, sets: event.target.value })
            }
            onClick={!currentUser.name ? handleShow : null}
          ></input>
        </td>
        {/* Input fields for reps or minutes */}
        <td className="input-text">
          <input
            type="text"
            onChange={(event) =>
              setNewEntry({ ...newEntry, reps_or_mins: event.target.value })
            }
            onClick={!currentUser.name ? handleShow : null}
          ></input>
        </td>
        {/* Submit button for the entry */}
        <td>
          <button
            type="button"
            onClick={
              !currentUser.name ? handleShow : () => submitEntry(null, exerciseData.id)}
          >
            Submit
          </button>
        </td>
        <td>{submittedExercises.includes(exerciseData.id) ? "✅" : null}</td>
      </tr>
    ));
  };
  // Post a new entry to the server for storage in the database
  const postEntry = (newEntry) => {
    console.log(currentUser, newEntry)
    try {
      axios
        .post(`${baseURL}entries/`, newEntry)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("Try-catch error:", error);
    }
  };

// Function that is triggered by the submit button  
  const submitEntry = (event, exercise_id) => {
    postEntry(newEntry); 
    // Fetches updated user entries from server and updates state
    getUserEntries(); 
    // Resets state to prepare for new entry
    setNewEntry({
      date: "",
      sets: "",
      reps_or_mins: "",
      user: currentUser.id,
      exercise: "",
    });
    // Visually resets form for the user using DOM manipulation
    const form = document.getElementById("form")
    form.reset()
  // Updates state to include the ID of the exercise that was submitted for tracking user progress
    setSubmittedExercises((prevSubmittedExercises) => [
      ...prevSubmittedExercises,
      exercise_id,
    ]);
  };

  // Defines layout of the component and allows user to input exercise data
  return (
    <div id="tracker-container">
      <form id="form">
        {/* Renders a table with React Bootstrap */}
      <Table striped bordered hover variant="light" className="traker-table">
        <thead>
          {/* Defines column headers */}
          <tr>
            <th>Movement</th>
            <th>Date</th>
            <th>Sets</th>
            <th>Reps/Mins</th>
            <th>Submit</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Populates the table body with dynamic exercise names and input fields */}
          {exerciseInfo()}
        </tbody>
      </Table>
      </form>
    </div>
  );
};

export default Tracker;
