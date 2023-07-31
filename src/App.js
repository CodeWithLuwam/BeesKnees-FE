import axios from "axios";
import './App.css';
import { useState } from "react";
import Exercise from "./components/Exercise";


const baseURL = "https://beesknees-be.onrender.com";

const App = () => {
  return (
    <div>
      <Exercise baseURL={baseURL}/>
    </div>
  );
}

export default App;
