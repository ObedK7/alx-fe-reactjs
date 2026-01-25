import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "darkred",
        borderRadius: "1.5em",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Services">Services</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  );
}

export default Navbar;
