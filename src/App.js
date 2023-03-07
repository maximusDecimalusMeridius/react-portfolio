import React, {useState} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import Resume from "./components/Resume/Resume";
import './App.css';

function App() {
  
  let [page, setPage] = useState("about-me");

  function renderPage(){
    if(page === "about-me"){
      return(
        <div className="aboutMeContainer">
          <div className="profilePicture"></div>
          <div className="aboutMeContent">
            <h2>About Me</h2>
              <span>
                A leader with a diverse background in delivering individual excellence, leading small-to-mid sized teams, and a deep passion in disruptive technologies such as AI/ML, AR/VR, AV, and robotics. Whether serving as an individual contributor or manager, I prioritize the needs of others to drive efficiency and productivity at scale, magnifying impact while developing others in line with their career goals.
              </span>
            <h3>Background</h3>
            <ul className="backgroundList">
              <li className="backgroundItem">Full-stack Developer (HTML/CSS/JS/React/MySQL/MongoDB) - Entry Level</li>
              <li className="backgroundItem">Staff-level Tech Recruiter - 11 years</li>
              <li className="backgroundItem">Global/Remote Project Management - 3 years</li>
              <li className="backgroundItem">Program Management - 6 years</li>
              <li className="backgroundItem">U.S. Marine - 6 years</li>
            </ul>
          </div>
        </div>
      )
    } else if (page === "projects") {
      return(
        <Project />
      )
    } else if (page === "contact-me") {
      return(
        <div className="contactMeContainer">About-me</div>
      )
    } else if (page === "resume") {
      return(
        <Resume />
      )
    }
  }

  return (
    <div className="App">
      <Header page={page} setPage={setPage}/>
        {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
