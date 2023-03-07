import React from "react";
import "./JobDescription.css";

export default function JobDescription(props) {

    function showAll(event){
        let greatGrandParent = event.currentTarget.parentNode.parentNode.parentNode.parentNode;
        
        if(event.target.value === "Show All"){
            for(var i = 0; i < greatGrandParent.lastChild.children.length; i++){
                greatGrandParent.lastChild.children[i].lastChild.classList.remove("hideJobDuties");
            }
            event.target.value = "Hide All";
        } else {
            for(var i = 0; i < greatGrandParent.lastChild.children.length; i++){
                greatGrandParent.lastChild.children[i].lastChild.classList.add("hideJobDuties");
            }
            event.target.value = "Show All";
        } 
    }

    function toggleShow(event){
        event.currentTarget.nextSibling.classList.toggle("hideJobDuties");
    }

    // Callback function mapping over each role to create bulletized job duties
    const roles = props.roles.map(item => {

        const jobDuties = item.jobDescription.map(value => <li key={value}>{value}</li>)

        return(
            <div>
                <div className="jobTitle noselect" onMouseDown={toggleShow}>
                    <span className="role">{item.title}</span>
                </div>
                    <ul className="jobDuties hideJobDuties">
                        {jobDuties}
                    </ul>    
            </div>
        )
    })

    // Returns the job description bubble for each company
    return(
        <div className="job">
            <div className="jobHeader">
                <div><img className="companyLogo" src={props.logo} alt="test"/></div>
                <div className="companyDetails">
                    <span className="companyName">{props.title} <input type="button" className="showAll" onMouseDown={showAll} value="Show All"></input></span><span className="datesOfEmployment">{props.dates}</span>
                </div>
            </div>
            <div className="lineBreak"></div>
            <div className="allRoles">
                {roles}   
            </div>
        </div>
    )
}