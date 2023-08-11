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
}) => {
  useEffect(() => getAllExercises(), []);

  const postEntry = (newEntry) => {
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

  const [newEntry, setNewEntry] = useState({
    date: "",
    sets: "",
    reps_or_mins: "",
    user: "",
    exercise: "",
  });

  const submitEntry = (event, exercise_id) => {
    // // event.preventDefault();
    postEntry(newEntry);
    setNewEntry({
      date: "",
      sets: "",
      reps_or_mins: "",
      user: "",
      exercise: "",
    });
  };

  const exerciseInfo = () => {
    return exercisesData.map((exerciseData, index) => (
      <tr key={exerciseData.id}>
        <td>{exerciseData.name}</td>
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
        <td className="input-text">
          <input
            type="text"
            onChange={(event) =>
              setNewEntry({ ...newEntry, sets: event.target.value })
            }
            onClick={!currentUser.name ? handleShow : null}
          ></input>
        </td>
        <td className="input-text">
          <input
            type="text"
            onChange={(event) =>
              setNewEntry({ ...newEntry, reps_or_mins: event.target.value })
            }
            onClick={!currentUser.name ? handleShow : null}
          ></input>
        </td>
        <td>
          <button
            type="button"
            onClick={() => {
              // setNewEntry({ ...newEntry, exercise: exerciseData.id });
              submitEntry(null, exerciseData.id);
            }}
          >
            Submit
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div id="tracker-container">
      <Table striped bordered hover variant="light" className="traker-table">
        <thead>
          <tr>
            <th>Movement</th>
            <th>Date</th>
            <th>Sets</th>
            <th>Reps/Mins</th>
            <th>Submit</th>
          </tr>
        </thead>
        <tbody>{exerciseInfo()}</tbody>
      </Table>
    </div>
  );
};

export default Tracker;
