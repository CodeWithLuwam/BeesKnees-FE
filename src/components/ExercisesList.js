import axios from "axios";
import { useState , useEffect} from "react";
import "../style/ExercisesList.css"
import { Link, useLocation } from "react-router-dom";


const ExercisesList = ( {baseURL}) => {
  // const location = useLocation();
  // console.log(location)
  const [exercisesData, setExercisesData] = useState([])


  const getAllExercises =() => {
    axios
    .get(`${baseURL}exercises/`)
    .then((response) => {
      // Code that executes with a successful response goes here
      // console.log(response)
      const newData=response.data.map((exercise)=>{
        return {
          id:exercise.id,
          name:exercise.name,
          description:exercise.description,
          image: exercise.image
        }
      })
      setExercisesData(newData)
      // console.log(exercisesData)
    })
    .catch((error) => {
      // Code that executes with an unsuccessful response goes here
    });    
  }

  

  useEffect(()=>getAllExercises(),[])
  const displayExercises = () => {
    return exercisesData.map((exercise, index )=>(
      // <Link to="/onboarding/profile" state={{ from: "occupation" }}>
    <Link to={`/exercises/${exercise.id}`}  state={{ from: `${exercise.id}` }} key={index} >
    <div id="exercise-box" >{exercise.name}</div> </Link>
    ))
  }
  return <>
  {/* <button onClick={getAllExercises}>Get All Exercises</button> */}
  <div id="exercises-container">{displayExercises()} </div>
  </>;
};

export default ExercisesList;