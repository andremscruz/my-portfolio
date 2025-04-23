import React from "react"
import { FaGithub } from "react-icons/fa";

function Project(props){
    return(
        <div className="main">
            {props.deployed && 
            <a href={props.project.link} target='_blank' rel='noopener noreferrer'>
                <img className="main--img" alt="" src={`images/${props.project.image}`}/>
            </a>}
            <legend>{props.project.name}</legend>
            <a href={props.project.gitLink} target='_blank' rel='noopener noreferrer'>
                <FaGithub style={{fontSize: '30px'}} className="main--img"/>
            </a>
        </div>
    )
}

export default Project