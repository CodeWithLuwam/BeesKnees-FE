import "../style/Home.css";
import React from 'react';
import NaviBar from './NaviBar';
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";



function Home () {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  
  return (
  <div > 
    <NaviBar/>

    <h1 id="beesknees"> Bee's Knees</h1>
    
    <div id="center-info"> 
      <div id="line1">Knee Rehibilitation </div>
      <div id="line2"> Improve Strength</div>
      <div id="line3">Improve Athleticism</div>
        <div id="bottom-info">
          <div id="line4">PLEASE SEE YOUR MEDICAL PRACTITIONER BEFORE BEGINNING</div>
          <div id="line5">THESE EXERCISES ARE ADAPTATIONS OF THE KNEE REHABILITATION PROTOCOL   </div>
          <div className="line5-cont">FIRST ESTABLISHED BY CHARLES POLIQUIN, THE GERMAN OLYMPIC TEAM COACH</div>
          <div id="line6">THIS IS NOT MEANT TO REPLACE THE ADVICE OF QUALIFIED MEDICAL 
          <div className="line6-cont">PRACTITIONER BUT A GUIDE TO MONITOR YOUR PROGRESS</div> </div>
        </div>
      </div> 
      {
        currentForm === "login" ?  <Login onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>
      }    
    </div>

)};

export default Home;