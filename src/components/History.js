// import "../style/_History.css";
import NaviBar from "./NaviBar";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";

const History = ({ baseURL, email }) => {
  const [userData, setUserData] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const getUserEntries = () => {
      axios
        .get(`${baseURL}user/`)
        .then((response) => {
          const newUserData = response.data.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            entries: user.entries,
          }));
          setUserData(newUserData);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const getExerciseData = () => {
      axios
        .get(`${baseURL}exercises/`)
        .then((response) => {
          setExerciseData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getUserEntries();
    getExerciseData();
  }, [baseURL]);

  useEffect(() => {
    userData.forEach((newUser) => {
      if (email === newUser.email) {
        setCurrentUser(newUser.name);
        // console.log(`HISTORY - User Name: ${newUser.name}`);
      }
    });
  }, [email, userData]);

  const exerciseMap = {}; // Creating a mapping dictionary
  exerciseData.forEach((exercise) => {
    exerciseMap[exercise.id] = exercise.name;
  });

  return (
    <>
      <NaviBar />
      {currentUser ? (
        <div>
          <div id="title"> {currentUser} History</div>
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
        <div>
          Please
          <Link to={`/`} id="login">
            {" "}
            login{" "}
          </Link>
        </div>
      )}
    </>
  );
};

export default History;
