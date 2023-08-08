import "../style/Home.css";
import React from 'react';
import NaviBar from './NaviBar';

function Home () {
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
          <div class="line5-cont">FIRST ESTABLISHED BY CHARLES POLIQUIN, THE GERMAN OLYMPIC TEAM COACH</div>
          <div id="line6">THIS IS NOT MEANT TO REPLACE THE ADVICE OF QUALIFIED MEDICAL 
          <div class="line6-cont">PRACTITIONER BUT A GUIDE TO MONITOR YOUR PROGRESS</div> </div>
        </div>
      </div>      
    </div>

)};

export default Home;