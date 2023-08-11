import React from "react";
import Table from "react-bootstrap/Table";
import "../style/History.css";

const History = ({
  baseURL,
  email,
  exerciseMap,
  currentForm,
  setCurrentForm,
  currentUser,
  setCurrentUser,
  userData,
  setUserData,
  exerciseData,
  setExerciseData,
  handleShow,
}) => {

  return (
    <div className="page-container">
      {currentUser ? (
        <div>
          <div id="title"> {currentUser}'s History</div>
          <Table
            className="traker-table"
            striped
            bordered
            hover
            variant="light"
          >
            <thead>
              <tr>
                <th>Exercise</th>
                <th>Date</th>
                <th>Sets</th>
                <th>Reps/Mins</th>
              </tr>
            </thead>
            <tbody>
              {userData
                .filter((user) => email === user.email)
                .map((user) =>
                  user.entries.map((entry) => (
                    <tr key={entry.id}>
                      <td className="input-text">
                        {exerciseMap[entry.exercise]}
                      </td>
                      <td className="input-text">{entry.date}</td>
                      <td className="input-text">{entry.sets}</td>
                      <td className="input-text">{entry.reps_or_mins}</td>
                    </tr>
                  ))
                )}
            </tbody>
          </Table>
        </div>
      ) : (
        <div id="history-logged-out">
          Please <span onClick={handleShow}>Sign In</span>
          <iframe
            title="exercising dog"
            src="https://giphy.com/embed/5EJHDSPpFhbG0"
            width="480"
            height="255"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default History;
