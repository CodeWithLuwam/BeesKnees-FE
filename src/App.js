// import axios from "axios";
import './App.css';
// import { useState } from "react";
import Exercise from "./components/Exercise";
import NaviBar from "./components/NaviBar";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ExercisesList from './components/ExercisesList';
import Home from './components/Home';
import { StrictMode } from 'react';



// const baseURL = "https://beesknees-be.onrender.com";
const baseURL = "https://beesknees-4h5l.onrender.com/";

const App = () => {
  return (
    <StrictMode>
      {/* <BrowserRouter> */}
        <div>
          {/* <Exercise baseURL={baseURL}/> */}
          {/* <NaviBar /> */}
            <Routes>
                
                {/* <Route path="/" element={<NaviBar baseURL={baseURL}/>} /> */}
                <Route path="/" element={<Home baseURL={baseURL}/>}  />
                <Route path="exercises"element={<ExercisesList baseURL={baseURL}/>} />
                <Route path="exercises/:id" element={<Exercise baseURL={baseURL}/>} />
            </Routes>
          </div>
      {/* </BrowserRouter> */}
    </StrictMode>
  );
}

export default App;



