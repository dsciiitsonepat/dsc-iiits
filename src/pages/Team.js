import React from "react";
import TeamCard from "../components/TeamCard";
import "../styles/team.css";


const COLORS = ["#FFD65F", "#FF4D4D", "#109D58", "#4286F5"]
export default function Team() {
	let i = 0;
  return (
    <div style={{height:"100vh", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"row" ,width:"100%"}}>
      <h2>Team</h2>
	  <TeamCard color={COLORS[i]}/>
    <TeamCard color={COLORS[2]}/>
    </div>
  );
}
