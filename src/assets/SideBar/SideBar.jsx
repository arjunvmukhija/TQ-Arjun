import React, { useState } from "react";
import "./SideBar.css";
import Asset1 from "../Asset1.png";
import Asset3 from "../Asset3.png";

/*This file contains the sidebar of the project.
Here React states are used to update the UI in real time for opening the sidebar on mobile.*/

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <>
      {!isOpen ? (
        <button
          className="hamburger"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          ☰
        </button>
      ) : (
        <button
          className="back-btn"
          onClick={() => setIsOpen(false)}
          aria-label="Back"
        >
          ←
        </button>
      )}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <img src={Asset1} alt="Flower" />
        </div>

        <div className="sidebar-middle">
          <img src={Asset3} alt="Framedphoto" width="120" />
        </div>
        <div className="sidebar-bottom">
          <nav>
            <a href="" onClick={handleLinkClick}>About</a>
            <a href="" onClick={handleLinkClick}>Events</a>
            <a href="" onClick={handleLinkClick}>Competition</a>
            <a href="" onClick={handleLinkClick}>Contact</a>
            <a href="" onClick={handleLinkClick}>App</a>
            <a href="" onClick={handleLinkClick}>Home</a>
          </nav>
        </div>
      </aside>
    </>
  );
}
