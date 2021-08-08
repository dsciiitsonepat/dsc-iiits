import React from "react";
import "../styles/Home.css";
import { Button } from "@material-ui/core";
import logo from "../assets/dsc-logo.png";

export default function Home() {
  return (
    <div className="homepage">
      <div className="mob-logo-dsc" style={{ backgroundColor: "#f0f0f0" }}>
        <img src={logo} alt="logo" style={{ width: "100%" }}></img>
      </div>
      <div className="container">
        <h2>Developer Students Club</h2>
        <h3>Powered by Google</h3>
        <p>
          Developer Student Clubs are university based community groups for
          students interested in Google Developer technologies.
        </p>
        <Button
          size="large"
          style={{
            backgroundColor: "#98BFFF",
            borderRadius: "32px",
            width: "30%",
          }}
          href="https://gdsc.community.dev/indian-institute-of-information-technology-sonepat/"
        >
          Join
        </Button>
      </div>
      <div class="marquee">
        <div class="track">
          <div class="content">&nbsp; </div>
        </div>
      </div>
    </div>
  );
}
