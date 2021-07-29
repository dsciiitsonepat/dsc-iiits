import React from "react";
import "../styles/Home.css";
import logo from "../assets/dsc-logo.png";
import { Button } from "@material-ui/core";

export default function Home() {
  return (
    <>
      <div className="container">
        <h2>Developer Students Club</h2>
        <h3>powered by google</h3>
        <p>
          Developer Studemt Clubs are university based community groups for
          studemts interested in Google Developer technologies
        </p>
        <Button
          size="large"
          style={{
            backgroundColor: "#98BFFF",
            borderRadius: "32px",
            width: "30%",
          }}
        >
          Join
        </Button>
      </div>
      <div
        class="bg"
        style={{ backgroundColor: "#c8ffe4", borderRadius: "100%" }}
      >
        <div className="logo-dsc" style={{ backgroundColor: "#f0f0f0" }}>
          <img src={logo} style={{ width: "100%" }}></img>
        </div>
      </div>
    </>
  );
}
