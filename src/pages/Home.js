import React from "react";
import "../styles/Home.css";
import { Button, IconButton } from "@material-ui/core";
import * as Fa from "react-icons/fa";

export default function Home() {

  const sendMail = () => {
    const email = "dsc.iiits.tech@gmail.com"
    window.location.href = "mailto:" + email;
  }

  return (
    <div className="homepage">
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
        <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", width:"100%", margin:"24px", fontSize:"1.5rem"}}>
          <IconButton><Fa.FaInstagram/></IconButton>
          <IconButton><Fa.FaGithub/></IconButton>
          <IconButton><Fa.FaTwitter/></IconButton>
          <IconButton><Fa.FaLinkedin/></IconButton>
          <IconButton onClick={sendMail}><Fa.FaEnvelope/></IconButton>
        </div>
      </div>
      <div class="marquee">
        <div class="track">
          <div class="content">&nbsp; </div>
        </div>
      </div>
    </div>
  );
}
