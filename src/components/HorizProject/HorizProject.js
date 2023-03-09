import React, {useState, useEffect} from 'react';
import "./HorizProject.css";
import projectData from "../../projectData.js";

function HorizProject(){
    
    const [lastClicked, setLastClicked] = useState("card-1");

    function handleClick (event) {
        if(event.target.id.includes("card") && !event.target.classList.contains("grow")){
            
            document.getElementById(lastClicked).firstElementChild.classList.remove("hideNode");
            document.getElementById(lastClicked).classList.remove("grow");
            document.getElementById(lastClicked).lastElementChild.classList.remove("showNode", "fadeInNode");
            
            event.target.firstElementChild.classList.add("hideNode")
            event.target.classList.add("grow");
            event.target.lastElementChild.classList.add("showNode");
            setTimeout(() => {
                event.target.lastElementChild.classList.add("fadeInNode"); 
            }, 250)
            setLastClicked(event.target.id);
        } else if (event.target.classList.contains("title") && !event.target.classList.contains("grow")){
            document.getElementById(lastClicked).firstElementChild.classList.remove("hideNode");
            document.getElementById(lastClicked).classList.remove("grow")
            document.getElementById(lastClicked).lastElementChild.classList.remove("showNode", "fadeInNode");
            
            event.target.parentNode.firstElementChild.classList.add("hideNode")
            event.target.parentNode.classList.add("grow");
            event.target.parentNode.lastElementChild.classList.add("showNode");
            event.target.parentNode.lastElementChild.classList.add("fadeInNode"); 
            
            setLastClicked(event.target.parentNode.id);
        }
}

const projectCards = projectData.map((project, index) => 
<div className="horiz-card" id={`card-${index + 1}`} onClick={handleClick}>
            <div className="title" id="title">{`${index + 1}`}</div>
            <div className="content" id="vertContent">
                <div className="facts">
                    <ul className="factsList">
                        <li className="fact"><span className="firstWord">Description:</span> {project.description}</li>
                        <li className="fact"><span className="firstWord">Tech:</span> {project.tech}</li>
                        <li className="fact"><span className="firstWord">Learnings:</span> {project.learnings}</li>
                        <li><a href={project.liveURL} target="_blank" rel="noreferrer">Live Site</a> | <a href={project.githubURL} target="_blank" rel="noreferrer">GitHub</a></li>
                    </ul>
                </div>
                <img className="menuPic" src={project.image} alt={project.title}/>
            </div>
        </div>
    )

    //useEffect() on load
    // add function to apply grow to vert-card on the first card on load
    // add function to apply hideNode to title on the first card on load
    // add function to apply showNode,fadeInNode to vertContent on the first card on load

    useEffect(() => { 
        document.getElementById("card-1").classList.add("grow");
        document.getElementById("title").classList.add("hideNode");
        document.getElementById("vertContent").classList.add("showNode", "fadeInNode");
     }, []);

    return(
        <div className="horizProjectContainer">
            <div className="horiz-menu">
                {projectCards}
            </div>
        </div>
    )
};

export default HorizProject;