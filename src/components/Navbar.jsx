// import React from 'react'
import logo2 from "../assets/images/logo2.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: "#e3f2fd" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo2} alt="Logo" height="50" style={{ border: "1px solid #ff1493", borderRadius: "5px", padding: "2px", marginLeft:"10px", marginRight:"10px" }} />
            <span style={{ color: "#003366"}}>Creative English School</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
