import React, {useState} from 'react';
import "./HorizProject.css";
import roomeasePic from "../../assets/thumbs/roomease.png";
import superheroPic from "../../assets/thumbs/superhero-game.png";
import quizPic from "../../assets/thumbs/quiz-game.png";
import codePic from "../../assets/thumbs/code-snippets.png";
import weatherPic from "../../assets/thumbs/weather-tracker.png";
import blogPic from "../../assets/thumbs/blog-app.png";

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

    return(
        <div className="projectContainer">
            <div className="horiz-menu">
                <div className="horiz-card grow" id="card-1" onClick={handleClick}>
                    <div className="title hideNode">1</div>
                    <div className="content showNode fadeInNode">
                        <div className="facts">
                            <ul className="factsList">
                                <li className="fact noselect"><span className="firstWord">Description:</span> Full-stack application to manage roommates, events, tasks, and "You-Owe-Mes"</li>
                                <li className="fact noselect"><span className="firstWord">Tech:</span> HTML/CSS/JS/Express/Node.js/MySQL</li>
                                <li className="fact noselect"><span className="firstWord">Learnings:</span> ERD development and implementation, signup/login auth, npm packages, project management</li>
                            </ul>
                        </div>
                        <img className="menuPic" src={roomeasePic} alt="project thumbnail"/>
                    </div>
                </div>
                <div className="horiz-card" id="card-2" onClick={handleClick}>
                    <div className="title">2</div>
                    <div className="content">
                    <div className="facts">
                            <ul className="factsList">
                                <li className="fact noselect"><span className="firstWord">Description:</span> Superhero multi-track card game</li>
                                <li className="fact noselect"><span className="firstWord">Tech:</span> HTML/CSS/JS/Express/Node.js/MySQL</li>
                                <li className="fact noselect"><span className="firstWord">Learnings:</span> API fetch requests, local storage, game design, event listeners & animations</li>
                            </ul>
                        </div>
                        <img className="menuPic" src={superheroPic} alt="project thumbnail"/>
                    </div>
                </div>
                <div className="horiz-card" id="card-3" onClick={handleClick}>
                    <div className="title">3</div>
                    <div className="content">
                    <div className="facts">
                            <ul className="factsList">
                                <li className="fact noselect"><span className="firstWord">Description:</span> Code Quiz Game</li>
                                <li className="fact noselect"><span className="firstWord">Tech:</span> HTML/CSS/JS</li>
                                <li className="fact noselect"><span className="firstWord">Learnings:</span> localStorage, JS event listeners, managing data in arrays</li>
                            </ul>
                        </div>
                        <img className="menuPic" src={quizPic} alt="project thumbnail"/>
                    </div>
                </div>
                <div className="horiz-card" id="card-4" onClick={handleClick}>
                    <div className="title">4</div>
                    <div className="content">
                    <div className="facts">
                            <ul className="factsList">
                                <li className="fact noselect"><span className="firstWord">Description:</span> A single-page vanilla JS application displaying code snippets</li>
                                <li className="fact noselect"><span className="firstWord">Tech:</span> HTML/CSS/JS</li>
                                <li className="fact noselect"><span className="firstWord">Learnings:</span> HTML layout, JS event listeners, CSS styling</li>
                            </ul>
                        </div>
                        <img className="menuPic" src={codePic} alt="project thumbnail"/>
                    </div>
                </div>
                <div className="horiz-card" id="card-5" onClick={handleClick}>
                    <div className="title">5</div>
                    <div className="content">
                    <div className="facts">
                            <ul className="factsList">
                                <li className="fact noselect"><span className="firstWord">Description:</span> A single-page weather tracking app that uses API fetch requests</li>
                                <li className="fact noselect"><span className="firstWord">Tech:</span> HTML/CSS/JS/APIs</li>
                                <li className="fact noselect"><span className="firstWord">Learnings:</span> Mobile-first design, API fetch requests, page layout & formatting</li>
                            </ul>
                        </div>
                        <img className="menuPic" src={weatherPic} alt="project thumbnail"/>
                    </div>
                </div>
                <div className="horiz-card" id="card-6" onClick={handleClick}>
                    <div className="title">6</div>
                    <div className="content">
                    <div className="facts">
                            <ul className="factsList">
                                <li className="fact noselect"><span className="firstWord">Tech:</span> HTML/CSS/JS/Express/Node.js/MySQL</li>
                                <li className="fact noselect"><span className="firstWord">Description:</span> Full-stack blog application that allows users to create blog posts and comment on others' posts</li>
                                <li className="fact noselect"><span className="firstWord">Learnings:</span> ERD design and joins, MVC model & handlebars, sessions, sign-up and login auth</li>
                            </ul>
                        </div>
                        <img className="menuPic" src={blogPic} alt="project thumbnail"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizProject;