import axios from "axios";
import { useState, useEffect} from "react";
import '../style/Exercise.css';
import { useLocation } from 'react-router-dom';

const Exercise = ({baseURL}) => {
  const location = useLocation()
  const { from } = location.state
  // console.log(baseURL, location.state, from);
  const [ exerciseName, setExerciseName ] = useState("")
  const [ exerciseDescription, setExerciseDescription ] = useState("")
  const [ exerciseImage, setExerciseImage ] = useState("")
  const getOneExercise =() => {
    axios
    .get(`${baseURL}exercises/${from}`)
    .then((response) => {
      // Code that executes with a successful response goes here
      console.log(response)
      const exerciseData = response.data
      console.log(exerciseData.name)
      setExerciseName(exerciseData.name)
      setExerciseDescription(exerciseData.description)
      setExerciseImage(exerciseData.image)
    })    
    .catch((error) => {
      // Code that executes with an unsuccessful response goes here
    });    
  }
  useEffect(()=>getOneExercise(),[])

  return (
    <div>
      <div id="name"> <h1 id="exercise-name">{exerciseName}</h1></div>

  <div id="exercises-container">
    <h2 id="exercise-description">{exerciseDescription}</h2>
    <img id="exercise-image"src={exerciseImage} alt="" height="450" />

    </div>
    </div>
  );
}
export default Exercise;

