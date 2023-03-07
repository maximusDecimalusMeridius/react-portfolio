import React, {useState} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import Resume from "./components/Resume/Resume";
import './App.css';

function App() {
  
  let [page, setPage] = useState("projects");

  function renderPage(){
    if(page === "about-me"){
      return(
        <div className="aboutMeContainer">About-me</div>
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
      <Header setPage={setPage}/>
        {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
