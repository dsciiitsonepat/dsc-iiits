import React from "react";
import "../styles/Home.css";
import { Button } from "@material-ui/core";

export default function Home() {
  return (
    <>
      <div className="container">
        <h2>Developer Students Club</h2>
        <h3>Powered by Google</h3>
        <p>
          Developer Student Clubs are university based community groups for
          students interested in Google Developer technologies
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
    </>
  );
}
