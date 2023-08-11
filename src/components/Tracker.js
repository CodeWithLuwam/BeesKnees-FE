import "../style/Tracker.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState } from "react";

const Tracker = ({ exercisesData, getAllExercises, baseURL }) => {
  const postEntry = ({ date, sets, reps_or_mins, exercise_id }) => {
    try {
      axios
        .post(`${baseURL}entry/`, {
          date: date,
          sets: sets,
          reps_or_mins: reps_or_mins,
          user: 1,
          exercise: exercise_id,
        })
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
    // user: 1,
    exercise: "",
  });

  const submitEntry = (event, exercise_id) => {
    console.log("submitEntry");
    // console.log(exercisesData);
    console.log(newEntry);
    // // event.preventDefault();
    postEntry(newEntry);
    setNewEntry({
      date: "",
      sets: "",
      reps_or_mins: "",
      // user: 1,
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
            onChange={
              (event) =>
                setNewEntry({
                  ...newEntry,
                  date: event.target.value,
                  exercise: exerciseData.id,
                })
            }
          ></input>
        </td>
        <td className="input-text">
          <input
            type="text"
            onChange={(event) =>
              setNewEntry({ ...newEntry, sets: event.target.value })
            }
          ></input>
        </td>
        <td className="input-text">
          <input
            type="text"
            onChange={(event) =>
              setNewEntry({ ...newEntry, reps_or_mins: event.target.value })
            }
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
