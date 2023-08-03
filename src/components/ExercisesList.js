import axios from "axios";
import { useState , useEffect} from "react";
import "../style/ExercisesList.css"

const ExercisesList = ( {baseURL}) => {
  const [exercisesData, setExercisesData] = useState([])

  const getAllExercises =() => {
    axios
    .get(`${baseURL}exercises/`)
    .then((response) => {
      // Code that executes with a successful response goes here
      console.log(response)
      const newData=response.data.map((exercise)=>{
        return {
          id:exercise.id,
          name:exercise.name,
          description:exercise.description,
          image: exercise.image
        }
      })
      setExercisesData(newData)
      console.log(exercisesData)
    })
    .catch((error) => {
      // Code that executes with an unsuccessful response goes here
    });    
  }

  useEffect(()=>getAllExercises(),[])
  const displayExercises = () => {
    return exercisesData.map((exercise, index )=>(
    <div id="exercise-box" key={index}>{exercise.name}</div>  
    ))
  }
  return <>
  {/* <button onClick={getAllExercises}>Get All Exercises</button> */}
  <div id="exercises-container">{displayExercises()} </div>
  </>;
};

export default ExercisesList;