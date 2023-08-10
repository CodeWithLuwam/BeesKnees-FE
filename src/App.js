import axios from "axios";
import './App.css';
import { useState , useEffect} from "react";
import Exercise from "./components/Exercise";
import NaviBar from "./components/NaviBar";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ExercisesList from './components/ExercisesList';
import Home from './components/Home';
import { StrictMode } from 'react';
import Tracker from './components/Tracker';
import History from './components/History';
import Signup from "./components/Signup";
import Login from "./components/Login";
// import 'bootstrap/dist/css/bootstrap.min.css'



// const baseURL = "https://beesknees-4h5l.onrender.com/";
const baseURL = "http://localhost:8000/";

const App = () => {
  const [exercisesData, setExercisesData] = useState([])

  // const [currentForm, setCurrentForm] = useState('login');
  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

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

  return (
    <StrictMode>
      {/* <BrowserRouter> */}
        <div>
          {/* {
            currentForm === "login" ?  <Login onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>
          } */}
        
          {/* <Exercise baseURL={baseURL}/> */}
          {/* <NaviBar /> */}
            <Routes>
                
                {/* <Route path="/" element={<NaviBar baseURL={baseURL}/>} /> */}
                <Route path="/" element={<Home baseURL={baseURL}/>}  />
                <Route path="exercises"element={<ExercisesList exercisesData={exercisesData} getAllExercises={getAllExercises} />} />
                <Route path="exercises/:id" element={<Exercise baseURL={baseURL}/>} />
                <Route path="/tracker" element={<Tracker exercisesData={exercisesData} getAllExercises={getAllExercises}/>} />
                <Route path="/history" element={<History baseURL={baseURL}/>} />
                {/* <Route path="/" element={<Login />}></Route> 
                <Route path="/signup" element={<Signup />}></Route>  */}
            </Routes>
            <div>
          </div>
          </div>
      {/* </BrowserRouter> */}
    </StrictMode>
  );
}

export default App;



