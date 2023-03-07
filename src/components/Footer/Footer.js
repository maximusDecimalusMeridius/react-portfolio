import React from 'react';
import "./Footer.css";
import fblogo from "../../assets/fb-logo.png";
import ghlogo from "../../assets/github-logo.png";
import lilogo from "../../assets/linkedin-logo.png";

function Footer(){
    return(
        <footer>
            <div className="footerTop">
                <a href="https://www.facebook.com/andy.ayooo" target="_blank" rel="noreferrer"><img className="logo-pic" src={fblogo} alt="facebook logo"/></a>
                <a href="https://www.github.com/maximusDecimalusMeridius" target="_blank" rel="noreferrer"><img className="logo-pic" src={ghlogo} alt="github logo"/></a>
                <a href="https://www.linkedin.com/in/the-recruiter-that-is-technical" target="_blank" rel="noreferrer"><img className="logo-pic" src={lilogo} alt="linkedin logo"/></a>
            </div>
            <p className="trademark">© Andy Gaudy 2023</p>
        </footer>
    )
};

export default Footer;