import React from 'react';
import "./Navigation.css";

function Navigation({setPage}){
    
    return(
        <ul className="navbar">
            <li className="navbar-item" id="about-me" onClick={() => setPage("about-me")}>About Me</li>
            <li className="navbar-item" id="portfolio" onClick={() => setPage("projects")}>Portfolio</li>
            <li className="navbar-item" id="contact-me">Contact Me</li>
            <li className="navbar-item" id="resume">Resume</li>
        </ul>
    );
};

export default Navigation;