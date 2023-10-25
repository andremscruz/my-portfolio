import React from "react";
import "../css/Inputs.css"

function Inputs(props){
    return(
        <div className="inputs--select">
                <legend>Here you can choose to have a look at the Projects I'm most proud of having participated on</legend>
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


                <br/>


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


                <br/>


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
                    id="non-deployed"
                    name="deployed"
                    value="not-deployed"
                    checked={props.conditions.deployed === "not-deployed"}
                    onChange={props.handleChange}
                />
                <label htmlFor="non-deployed">Not Deployed Projects</label>
                
            </div>
    )
}

export default Inputs