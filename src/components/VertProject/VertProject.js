import React, {useState} from 'react';
import "./VertProject.css";
import roomeasePic from "../../assets/thumbs/roomease.png";
import superheroPic from "../../assets/thumbs/superhero-game.png";

function VertProject(){
    
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

    return(
        <div className="projectContainer">
            <div className="vert-menu">
                <div className="vert-card grow" id="card-1" onClick={handleClick}>
                    <div className="title hideNode">1</div>
                    <div className="content showNode fadeInNode">
                        <div className="facts">
                            <ul className="factsList">
                                <li className="fact"><span className="firstWord">Description:</span> Full-stack application to manage roommates, events, tasks, and "You-Owe-Mes"</li>
                                <li className="fact"><span className="firstWord">Tech:</span> HTML/CSS/JS/Express/Node.js/MySQL</li>
                                <li className="fact"><span className="firstWord">Learnings:</span> </li>
                            </ul>
                        </div>
                        <img className="menuPic" src={roomeasePic} alt="project thumbnail"/>
                    </div>
                </div>
                <div className="vert-card" id="card-2" onClick={handleClick}>
                    <div className="title">2</div>
                    <div className="content">
                    <div className="facts">
                            <ul className="factsList">
                                <li className="fact"><span className="firstWord">Description:</span> </li>
                                <li className="fact"><span className="firstWord">Tech:</span> HTML/CSS/JS/Express/Node.js/MySQL</li>
                                <li className="fact"><span className="firstWord">Learnings:</span> </li>
                            </ul>
                        </div>
                        <img className="menuPic" src={superheroPic} alt="project thumbnail"/>
                    </div>
                </div>
                <div className="vert-card" id="card-3" onClick={handleClick}>
                    <div className="title">3</div>
                    <div className="content">
                    <div className="facts">
                            <ul className="factsList">
                                <li className="fact"><span className="firstWord">Description:</span> </li>
                                <li className="fact"><span className="firstWord">Tech:</span> HTML/CSS/JS/Express/Node.js/MySQL</li>
                                <li className="fact"><span className="firstWord">Learnings:</span> </li>
                            </ul>
                        </div>
                        <img className="menuPic" src={superheroPic} alt="project thumbnail"/>
                    </div>
                </div>
                <div className="vert-card" id="card-4" onClick={handleClick}>
                    <div className="title">4</div>
                    <div className="content">
                    <div className="facts">
                            <ul className="factsList">
                                <li className="fact"><span className="firstWord">Description:</span> </li>
                                <li className="fact"><span className="firstWord">Tech:</span> HTML/CSS/JS/Express/Node.js/MySQL</li>
                                <li className="fact"><span className="firstWord">Learnings:</span> </li>
                            </ul>
                        </div>
                        <img className="menuPic" src={superheroPic} alt="project thumbnail"/>
                    </div>
                </div>
                <div className="vert-card" id="card-5" onClick={handleClick}>
                    <div className="title">5</div>
                    <div className="content">
                    <div className="facts">
                            <ul className="factsList">
                                <li className="fact"><span className="firstWord">Description:</span> </li>
                                <li className="fact"><span className="firstWord">Tech:</span> HTML/CSS/JS/Express/Node.js/MySQL</li>
                                <li className="fact"><span className="firstWord">Learnings:</span> </li>
                            </ul>
                        </div>
                        <img className="menuPic" src={superheroPic} alt="project thumbnail"/>
                    </div>
                </div>
                <div className="vert-card" id="card-6" onClick={handleClick}>
                    <div className="title">6</div>
                    <div className="content">
                    <div className="facts">
                            <ul className="factsList">
                                <li className="fact"><span className="firstWord">Description:</span> </li>
                                <li className="fact"><span className="firstWord">Tech:</span> HTML/CSS/JS/Express/Node.js/MySQL</li>
                                <li className="fact"><span className="firstWord">Learnings:</span> </li>
                            </ul>
                        </div>
                        <img className="menuPic" src={superheroPic} alt="project thumbnail"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VertProject;