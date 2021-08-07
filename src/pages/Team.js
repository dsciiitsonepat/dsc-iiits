import React from "react"
import "../styles/team.css"
import TeamCarousal from "../components/TeamCarousal"

export default function Team() {
  return (
    <>
      <div className="team-main">
        <div className="team-page">
          <h1>Team</h1>
          <div className="teamcarousal-container" style={{ display: "flex", flexDirection: "row", position: "relative" }}>
            <TeamCarousal />
          </div>
        </div>
      </div>
    </>
  )
}
