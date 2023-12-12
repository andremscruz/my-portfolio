import React from "react";

function Inputs(props){
    return(
        <div className="inputs--select">
            <legend>Please have a look at some of the Projects I'm most proud of having participated on</legend>
            <br/>
            <legend>Filter projects from the options below:</legend>
            <div className="inputs--inputs">
                <input 
                    type="radio"
                    id="solo"
                    name="solo"
                    value="solo"
                    checked={props.conditions.solo === "solo"}
                    onChange={props.handleChange}
                />
                <label htmlFor="solo">Solo Projects</label>


                <input 
                    type="radio"
                    id="group"
                    name="solo"
                    value="group"
                    checked={props.conditions.solo === "group"}
                    onChange={props.handleChange}
                />
                <label htmlFor="group">Group Projects</label>
            </div>
                
            <div className="inputs--inputs">
                <input 
                    type="radio"
                    id="college"
                    name="college"
                    value="college"
                    checked={props.conditions.college === "college"}
                    onChange={props.handleChange}
                />
                <label htmlFor="college">College Projects</label>


                <input 
                    type="radio"
                    id="post-college"
                    name="college"
                    value="post-college"
                    disabled={props.conditions.solo === "group"}
                    checked={props.conditions.college === "post-college"}
                    onChange={props.handleChange}
                />
                <label htmlFor="post-college">Post College Projects</label>
            </div>


            <div className="inputs--inputs">
                <input 
                    type="radio"
                    id="deployed"
                    name="deployed"
                    value="deployed"
                    disabled={props.conditions.college === "college"}
                    checked={props.conditions.deployed === "deployed"}
                    onChange={props.handleChange}
                />
                <label htmlFor="deployed">Deployed Projects</label>


                <input 
                    type="radio"
                    id="not-deployed"
                    name="deployed"
                    value="not-deployed"
                    checked={props.conditions.deployed === "not-deployed"}
                    onChange={props.handleChange}
                />
                <label htmlFor="non-deployed">Not Deployed Projects</label>
            </div>   
        </div>
    )
}

export default Inputs