import { useEffect } from "react";
import "../style/ExercisesList.css"
import { Link } from "react-router-dom";


const ExercisesList = ( {exercisesData, getAllExercises}) => {

  useEffect(()=>getAllExercises(),[])
  const displayExercises = () => {
    return exercisesData.map((exercise, index )=>(
    <Link to={`/exercises/${exercise.id}`}  state={{ from: `${exercise.id}` }} key={index} id="exercise-box" >
    {exercise.name} </Link>
    ))
  }
  return <>
  <div>
    <div id="title"> <div className="glow"> Click on Exercise for Instructions</div></div>

  <div id="container">
  <div id="exercises-container">{displayExercises()} </div>
  
  </div>
  </div>
  </>;
};

export default ExercisesList;