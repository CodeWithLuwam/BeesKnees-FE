// import "../style/_History.css";
import NaviBar from "./NaviBar";
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";

const History = ({ baseURL, email }) => {
  const [userData, setUserData] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);

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

  const getUserEntries = () => {
    axios
      .get(`${baseURL}user/`)
      .then((response) => {
        // console.log(response);
        const newUserData = response.data.map((user) => ({
          id: user.id,
          name: user.name,
          entries: user.entries,
        }));
        setUserData(newUserData);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserEntries();
    getExerciseData();
  }, []);

  const exerciseMap = {}; // Creating a mapping dictionary
  exerciseData.forEach((exercise) => {
    exerciseMap[exercise.id] = exercise.name;
  });

  const displayUserEntries = () => {
    return userData.map((user, index) => (
      <React.Fragment key={index}>
        <tr>
          <th>Exercise</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
        </tr>
        {user.entries.map((entry) => (
          <tr key={entry.id}>
            <td className="input-text">{exerciseMap[entry.exercise]}</td>
            <td className="input-text">{entry.date}</td>
            <td className="input-text">{entry.sets}</td>
            <td className="input-text">{entry.reps_or_mins}</td>
          </tr>
        ))}
      </React.Fragment>
    ));
  };

  return (
    <>
      <NaviBar />
      <div>
        <div id="title">Your History</div>
        <Table className="traker-table" striped bordered hover variant="light">
          <tbody>{displayUserEntries()}</tbody>
        </Table>
      </div>
    </>
  );
};

export default History;
