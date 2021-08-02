import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import axios from "axios";
import GitCard from "../components/GitCard";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const {data} = await axios.get(
        "https://api.github.com/users/dsciiitsonepat/repos"
      );
      setRepos(data);
    };
    fetchProjects();
  }, []);
  

  return (
    <div className="projects-page">
      <div className="projects-main">
        <h1>Projects</h1>
        <div className="project-marquee" style={{height:"55%",width:"75%"}}>
          {repos && repos.map((item)=><GitCard project={item} className="proj-card"/>)}
        </div>
      </div>
    </div>
  );
}