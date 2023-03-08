import React from "react";
import JobDescription from "../JobDescription/JobDescription";
import jobsArray from "../../jobData.js";
import "./Resume.css"
import resume from "../../assets/andys-resume.pdf";

export default function Resume() {
    
    const jobDescriptions = jobsArray.map(item => {
        return(
            <JobDescription 
                key = {crypto.randomUUID()}
                title = {item.title}
                logo = {item.logo}
                dates = {item.dates}
                roles = {item.roles}
            />
        )
    })

    return(
        <div className="jobContainer">
            <a className="resumeLink" href={resume} target="none" download="andys-resume.pdf">Click to download my resume</a>
            {jobDescriptions}
        </div>
    )
}