import React from "react";
import Tag from "./StackTag";

function Description(props){
    return(
        <>
            <div className="description-main-container">
                <div className="description-div">
                    <div className='description-cross' onClick={props.handleClick}>
                    <div className="BackSlash"></div>
                    <div className="ForwardSlash"></div>
                </div>
                    <div className="description-header">
                        <p className="description-icon">{props.description.icon}</p>
                        <h1 className="description-title">{props.description.title}</h1>
                    </div>
                    <Tag stack={props.description.stack} />
                    <h3 className="description-subtitle">Context</h3>
                    <p className="description-context">
                        {props.description.context}
                    </p>
                    <h3 className="description-subtitle">Challenge</h3>
                    <p className="description-challenge">
                        {props.description.challenge}
                    </p>
                    <h3 className="description-subtitle">Solution</h3>
                    <ul className="description-solutions-list">
                        {props.description.solution.map(solution =>
                            <li className="description-solution" key={solution}>{solution}</li>
                        )}
                    </ul>
                    <h3 className="description-subtitle">Result</h3>
                    <p className="description-result">
                        {props.description.result}
                    </p>
                </div>
            </div>
            
        </>
    )
}

export default Description