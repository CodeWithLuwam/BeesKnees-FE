import axios from "axios";
import './App.css';
import { useState } from "react";


// const baseURL = process.env.REACT_APP_BACKEND_URL;

const App = () => {
  const [ exerciseName, setExerciseName ] = useState("Name")
  const [ exerciseDescription, setExerciseDescription ] = useState("Description")
  const [ exerciseImage, setExerciseImage ] = useState("https://images.unsplash.com/photo-1690535707954-597ff9dbcdc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=447&q=80")
  // const [ exerciseImage, setExerciseImage ] = useState("https://res.cloudinary.com/dvbdefnwx/image/upload/v1677474681/Moratia%20Images/IMG_4092_rabhmw.png")
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
      setExerciseImage(exerciseData.image)
    })
    
    .catch((error) => {
      // Code that executes with an unsuccessful response goes here
    });    
  }
  return (
    <div>
    <button onClick={getOneExercise}>get One Exercise</button>
    <h1>{exerciseName}</h1>
    <h2>{exerciseDescription}</h2>
    <img src={exerciseImage} alt="img" height="250" />
    {/* <h2>{exerciseImage}</h2> */}

    </div>
  );
}

export default App;
