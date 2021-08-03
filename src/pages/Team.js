import React, { useEffect, useState } from 'react';
import "../styles/team.css";
import TeamCardContainer from "../components/TeamCardSlider";
import TeamCarousal from "../components/TeamCarousal";



export default function Team() {
	const [tab, setTab] = useState(0)

  return (
    <>
	 <div className = "team-main">
	 	<div className = "team-page">
	 		<h1>Team</h1>
            <div style={{display:"flex", flexDirection:"row",position:"relative"}}>
               <TeamCarousal/>
          </div>
	 	</div>
	 </div> 
    </>
  );
}
