import React from 'react';
import "./Navigation.css";

function Navigation({page, setPage}){
    
    const navbarItems = document.querySelectorAll(".navbar-item");  

    function highlightAndLoad(event) {

        for(let i = 0; i < navbarItems.length; i++){
            navbarItems[i].style.fontWeight = "normal";
            navbarItems[i].style.transform = "scale(1)";
            console.log(i);
        }

        event.target.style.fontWeight = "bold";
        event.target.style.transform = "scale(1.2)";
        setPage(event.target.id)
    }

    return(
        <ul className="navbar">
            <li className="navbar-item" id="about-me" onClick={highlightAndLoad}>About Me</li>
            <li className="navbar-item" id="projects" onClick={highlightAndLoad}>Portfolio</li>
            <li className="navbar-item" id="contact-me" onClick={highlightAndLoad}>Contact Me</li>
            <li className="navbar-item" id="resume" onClick={highlightAndLoad}>Resume</li>
        </ul>
    );
};

export default Navigation;