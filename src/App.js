// import axios from "axios";
import './App.css';
// import { useState } from "react";
// import Exercise from "./components/Exercise";
import NaviBar from "./components/NaviBar";


const baseURL = "https://beesknees-be.onrender.com";

const App = () => {
  return (
    <div>
      <NaviBar  baseURL={baseURL}/>
      {/* <Exercise baseURL={baseURL}/> */}
    </div>
  );
}

export default App;
