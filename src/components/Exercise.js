import axios from "axios";
import { useState, useEffect} from "react";
import '../style/Exercise.css';
import { useLocation, Link } from 'react-router-dom';
import NaviBar from "./NaviBar";


const Exercise = ({baseURL}) => {
  const location = useLocation()
  const { from } = location.state
  // console.log(baseURL, location.state, from);
  const [ exerciseName, setExerciseName ] = useState("")
  const [ exerciseDescription, setExerciseDescription ] = useState("")
  const [ exerciseImage, setExerciseImage ] = useState("")
  // const [ exerciseImage, setExerciseImage ] = useState("https://images.unsplash.com/photo-1690535707954-597ff9dbcdc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=447&q=80")
  // const [ exerciseImage, setExerciseImage ] = useState("https://res.cloudinary.com/dvbdefnwx/image/upload/v1677474681/Moratia%20Images/IMG_4092_rabhmw.png")
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
      <NaviBar/>
      <div id="name"> <h1 id="exercise-name">{exerciseName}</h1></div>

  <div id="exercises-container">
    {/* <button onClick={getOneExercise}>get One Exercise</button> */}
    {/* <Link to={"/exercises/"}   key={index} > </Link> */}
    {/* <button id= "button" onClick={getOneExercise}>Exercise</button> */}
    <h2 id="exercise-description">{exerciseDescription}</h2>
    <img id="exercise-image"src={exerciseImage} alt="" height="450" />
    {/* <h2>{exerciseImage}</h2> */}

    </div>
    </div>
  );
}

export default Exercise;

