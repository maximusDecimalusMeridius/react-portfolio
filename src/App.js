import React, {useState} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import './App.css';

function App() {
  
  let [page, setPage] = useState("about-me");

  function renderPage(){
    if(page === "about-me"){
      return(
        <div>About Me</div>
      )
    } else if (page === "projects") {
      return(
        <div>Projects</div>
      )
    }
  }

  return (
    <div className="App">
      <Header setPage={setPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
