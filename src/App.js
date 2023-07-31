import axios from "axios";
import './App.css';
import { useState } from "react";


// const baseURL = process.env.REACT_APP_BACKEND_URL;

const App = () => {
  const [ exerciseName, setExerciseName ] = useState("Name")
  const [ exerciseDescription, setExerciseDescription ] = useState("Description")
  // const [ exerciseImage, setExerciseImage ] = useState("https://unsplash.com/photos/a-view-of-a-city-skyline-at-dusk-Z3bUl4t-tl0")
  const getOneExercise =() => {
    axios
    .get("https://beesknees-be.onrender.com/exercises/")
    .then((response) => {
      // Code that executes with a successful response goes here
      // console.log(response.data[0])
      const exerciseData = response.data[0]
      console.log(exerciseData.name)
      setExerciseName(exerciseData.name)
      setExerciseDescription(exerciseData.description)
      // setExerciseImage(exerciseData.image)
    })
    
    .catch((error) => {
      // Code that executes with an unsuccessful response goes here
    });    
  }
  return (
    <>
    <button onClick={getOneExercise}>get One Exercise</button>
    <h1>{exerciseName}</h1>
    <h2>{exerciseDescription}</h2>
    {/* <img src='https://unsplash.com/photos/a-view-of-a-city-skyline-at-dusk-Z3bUl4t-tl0' alt="img" /> */}
    </>
  );
}

export default App;
