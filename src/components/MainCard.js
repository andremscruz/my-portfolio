import React from "react";
import Tag from "./StackTag";

function MainCard(props){
    return(
        <>
            <div className="card-div">
                <div className="card-header">
                    <p className="card-icon">{props.main.icon}</p>
                    <h1 className="card-title">{props.main.title}</h1>
                </div>
                <p className="card-description">
                    {props.main.description}
                </p>
                <Tag stack={props.main.stack}/>
                <button className="card-button" 
                onClick={() => props.handleClick(
                    props.main.icon, props.main.title, props.main.stack, 
                    props.main.context, props.main.challenge, props.main.solution, 
                    props.main.result, props.main.link, props.main.gitLink)}>
                    See more
                </button>
            </div>
        </>
    )
}

export default MainCard