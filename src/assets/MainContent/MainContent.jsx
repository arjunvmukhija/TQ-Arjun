import React from "react";
import Asset2 from "../Asset2.webp";
import Asset4 from "../Asset4.png";
import "./MainContent.css";

/*This file contains the main body of the project.*/

export default function mainContent() {
    return(

      <main className="main">
        <button className="register-btn">Register Now!</button>

        <h1 className="title">Taqneeq 18.0 Is Back!</h1>
        <p className="description">
          Taqneeq is where aspiring tech enthusiasts, developers, and visionaries
          come together to compete, learn, and revolutionize the future. With a
          perfect blend of competitions, workshops, hackathons, and exhibitions,
          this year's edition promises to be bigger and better than ever before.
        </p>

        <div className="asset4">
          <img src={Asset4} alt="Book and Flowers"/>
        </div>

        <img className="asset2" src={Asset2} alt="Mountains and Flowers" />
      </main>
    );
}