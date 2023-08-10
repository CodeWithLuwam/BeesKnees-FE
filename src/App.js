import axios from "axios";
import './App.css';
import { useState , useEffect} from "react";
import Exercise from "./components/Exercise";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ExercisesList from './components/ExercisesList';
import Home from './components/Home';
import { StrictMode } from 'react';
import Tracker from './components/Tracker';
import History from './components/History';



const baseURL = "https://beesknees-4h5l.onrender.com/";
// const baseURL = "http://localhost:8000/";

const App = () => {
  const [exercisesData, setExercisesData] = useState([])
  const [ email, setEmail] = useState ('');
  const [ password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`HOME - Email: ${email}`);
  }


  const getAllExercises =() => {
    axios
    .get(`${baseURL}exercises/`)
    .then((response) => {
      const newData=response.data.map((exercise)=>{
        return {
          id:exercise.id,
          name:exercise.name,
          description:exercise.description,
          image: exercise.image
        }
      })
      setExercisesData(newData)
    })
    .catch((error) => {
    });    
  }

  return (
    <StrictMode>
        <div>
            <Routes>
                
                <Route path="/" element={<Home 
                email={email} 
                setEmail={setEmail}
                password={password} 
                setPassword={setPassword}              
                name={name} 
                setName={setName}
                handleSubmit={handleSubmit}             
                
                />}  />
                <Route path="exercises"element={<ExercisesList exercisesData={exercisesData} getAllExercises={getAllExercises} />} />
                <Route path="exercises/:id" element={<Exercise baseURL={baseURL}/>} />
                <Route path="/tracker" element={<Tracker exercisesData={exercisesData} getAllExercises={getAllExercises}/>} />
                <Route path="/history" element={<History email={email} baseURL={baseURL}/>} />
            </Routes>
            <div>
          </div>
          </div>
    </StrictMode>
  );
}

export default App;



