import React, {useState} from 'react';
import "./Navigation.css";

function Navigation({page, setPage}){
    

    const [lastClicked, setLastClicked] = useState("about-me")

    function highlightAndLoad(event) {
        document.getElementById(lastClicked).style.fontWeight = "normal";
        document.getElementById(lastClicked).style.transform = "scale(1)";
        setLastClicked(event.target.id);
        setPage(event.target.id);
        event.target.style.fontWeight = "bold";
        event.target.style.transform = "scale(1.2)";
    }

    const loadStyle = {
        listItem: {
            fontWeight: "bold",
            transform: "scale(1.2)"
        }
    }

    return(
        <ul className="navbar">
            <li className="navbar-item" id="about-me" style={loadStyle.listItem} onClick={highlightAndLoad}>About Me</li>
            <li className="navbar-item" id="projects" onClick={highlightAndLoad}>Portfolio</li>
            <li className="navbar-item" id="contact-me" onClick={highlightAndLoad}>Contact</li>
            <li className="navbar-item" id="resume" onClick={highlightAndLoad}>Resume</li>
        </ul>
    );
};

export default Navigation;