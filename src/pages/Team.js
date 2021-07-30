import React, { useState } from "react";
import TeamCard from "../components/TeamCard";
import "../styles/team.css";
import firebase from '../firebase';
import { useEffect } from "react";

const COLORS = ["#FFD65F", "#FF4D4D", "#109D58", "#4286F5"]
export default function Team() {
	const [members,setMembers]=  useState([])
	useEffect(() => {
		const fetchMembers = async () => {
			const db = firebase.firestore();
			const data = await db.collection("members").get()
			const members = data.docs.map(doc => doc.data())
			setMembers(members)
		}
		fetchMembers()
	},[])

  return (
    <div style={{height:"100vh", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
      <h2>Team</h2>
	  <div style={{width:"65%", display:"flex",justifyContent:"space-evenly", flexDirection:"row", height:"75%", alignItems:"center"}}>
	  {
		  members.map((member,index) => {
			  return <TeamCard key={index} member={member} color={COLORS[index%COLORS.length]}/>
		  })
	  }
	  </div>
    </div>
  );
}
