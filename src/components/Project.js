import React from "react"

function Project(props){
    return(
        <div className="main">
            {props.deployed && 
            <a 
                href={props.link}>
                        <img className="img" alt="" src={props.image}/>
            </a>}
            <legend>{props.name}</legend>
            <a 
                href={props.gitLink}>
                    <img className="img" alt="" src={props.gitImage}/>
            </a>
        </div>
    )
}

export default Project