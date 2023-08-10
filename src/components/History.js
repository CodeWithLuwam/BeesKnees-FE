// import "../style/_History.css";
import NaviBar from "./NaviBar";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

const History = ({ baseURL }) => {
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
        console.log(error)
      });
  };

  useEffect(()=>{getUserEntries(); getExerciseData();},[])
  
  const exerciseMap = {}; // Creating a mapping dictionary
  exerciseData.forEach((exercise) => {
    exerciseMap[exercise.id] = exercise.name;
  });

  const displayUserEntries = () => {
    return userData.map((user, index )=>(   

      // <div key={index}>
      //   {user.name}
      //   {/* {user.entries[0].date} */}
      //   {user.entries.length > 0 && <div>{user.entries[0].date}</div>}
      // </div>

      <div key={user.id}>
      <div>{user.name}</div>
      {user.entries.map((entry) => (
        <div key={entry.id}>
          <div>Date: {entry.date}</div>
          <div>Sets: {entry.sets}</div>
          <div>Reps or Minutes: {entry.reps_or_mins}</div>
          <div>Exercise: {exerciseMap[entry.exercise]}</div>
        </div>
      ))}
    </div>
    ))
  }

  return (
    <>
      <NaviBar />
      <div>
      <div id="title">Your History</div>

          <div >{displayUserEntries()} </div>

        {/* {userData.map((user) => (
        <div key={user.id}>
          <div className="user-name">NAME{user.name}</div>
          <div>ENTRIES{user.entries}</div>
        </div>
        
      ))} */}
      </div>
    </>
  );
};

export default History;
