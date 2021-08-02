import React from "react";
import "../styles/team.css";
import TeamCardContainer from "../components/TeamCardSlider";
import { Button } from "@material-ui/core";

export default function Team() {
  return (
    <>
	 <div className = "team-main">
	 	<div className = "team-page">
	 		<h1>Team</h1>
	 	<div className = "card-page">
	  		<TeamCardContainer/>
	   	</div>
	 	</div>
	 </div> 
    </>
  );
}
