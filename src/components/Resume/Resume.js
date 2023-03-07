import React from "react";
import JobDescription from "../JobDescription/JobDescription";
import jobsArray from "../../data.js";

export default function Resume() {
     
    const jobDescriptions = jobsArray.map(item => {
        return(
            <JobDescription 
                title = {item.title}
                logo = {item.logo}
                dates = {item.dates}
                roles = {item.roles}
            />
        )
    })

console.log(jobsArray.title);

    return(
        <div className="body">
            {jobDescriptions}
        </div>
    )
}