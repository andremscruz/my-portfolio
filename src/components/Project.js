import React from "react"

function Project(props){
    return(
        <div className="main">
            {props.deployed && 
            <a 
                href={props.project.link}>
                        <img className="img" alt="" src={`images/${props.project.image}`}/>
            </a>}
            <legend>{props.project.name}</legend>
            <a 
                href={props.project.gitLink}>
                    <img className="img" alt="" src={`images/${props.project.gitImage}`}/>
            </a>
        </div>
    )
}

export default Project