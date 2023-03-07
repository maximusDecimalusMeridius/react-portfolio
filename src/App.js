import React, {useState} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";
import HorizProject from "./components/HorizProject/HorizProject";
import VertProject from "./components/VertProject/VertProject";
import profilePic from "./assets/profile-pic.jpg"
import './App.css';

function App() {

  let [page, setPage] = useState("about-me");
  let [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [])

  function submitMessage(event) {
    event.preventDefault();
    alert("Message sent!")
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }

  function renderPage(){
    if(page === "about-me"){
      return(
        <div className="aboutMeContainer">
          <div className="profilePicture">
            <img src={profilePic} alt="my face with a VR headset" />
          </div>
          <div className="aboutMeContent">
            <h2>About Me</h2>
            <div className="slider"></div>
            <span>
              A leader with a diverse background in delivering individual excellence, leading small-to-mid sized teams, and a deep passion in disruptive technologies such as AI/ML, AR/VR, AV, and robotics. Whether serving as an individual contributor or manager, I prioritize the needs of others to drive efficiency and productivity at scale, magnifying impact while developing others in line with their career goals.
            </span>
            <br /><br />
            <a href="https://www.github.com/maximusDecimalusMeridius"><p>GitHub</p></a>
            <a href="https://www.linkedin.com/in/the-recruiter-that-is-technical"><p>LinkedIn</p></a>
            <h3>Background</h3>
            <ul className="backgroundList">
              <li className="backgroundItem">Full-stack Developer (HTML, CSS, JS, React, MySQL, MongoDB) - Entry Level</li>
              <li className="backgroundItem">Staff-level Tech Recruiter - 11 years</li>
              <li className="backgroundItem">Global/Remote Project Management - 3 years</li>
              <li className="backgroundItem">Program Management - 6 years</li>
              <li className="backgroundItem">U.S. Marine - 6 years</li>
            </ul>
          </div>
        </div>
      )
    } else if (page === "projects" && width > 800) {
      return(
        <HorizProject />
      )
    } else if (page === "projects" && width < 800) {
      return(
        <VertProject />
      )
    } else if (page === "contact-me") {
      return(
        <div className="contactMeContainer">
          <form className="contactForm" onSubmit={submitMessage}>
            <div className="formTopRow">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" placeholder="youremail@address.com"></input>
            </div>
            <div className="formBottomRow">
              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message" placeholder="Please leave a message!"></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
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
