import React, { useState } from "react";
import Inputs from "./Inputs";
import Project from "./Project";
import Cards from "./Cards";
import { dataG, dataScn, dataSpd, dataSpn } from "../data"

function Main(){

    const[toggle, setToggle] = useState(true)
    const[conditions, setConditions] = useState(
        {
            solo: "solo",
            college: "post-college",
            deployed: "deployed"
        })

    function toggleFunction(){
        setToggle(prevState => !prevState)
    }

    function handleChange(event) {
        const { name, value } = event.target;
        
        if (name === "college" && value === "college") {
            setConditions(prevState => (
            {
                ...prevState,
                college: "college",
                deployed: "not-deployed"
            }));
        } 
        else if(name === "solo" && value === "group"){
            setConditions(prevState => (
            {
                ...prevState,
                solo: "group",
                college: "college",
                deployed: "not-deployed"
            }))
        }
        else {
              setConditions((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    }


    return(
        <>
            <main className="main--cards">
                <Cards />
            </main>

            <div className='experience-cross' onClick={toggleFunction}>
                <div className="BackSlash"></div>
                <div className="ForwardSlash"></div>
            </div>
            <main className="main--content">
                <Inputs conditions={conditions} handleChange={handleChange}/>
                <div>
                    {conditions.solo === "solo" 
                    && conditions.college === "post-college" 
                    && conditions.deployed === "deployed"
                    && <div className="main--links"> 
                            <legend>These apps are developed using React</legend> 
                            {dataSpd.map(project => 
                                <Project key = {project.name} project = {project} deployed = {true} /> 
                                )}
                        </div>
                    }
                    {conditions.solo === "solo"
                    && conditions.college === "post-college"
                    && conditions.deployed === "not-deployed"
                    && <div className="main--links">
                            <legend>These are simpler codes that I programmed when I was reviewing JavaScript</legend>
                            {dataSpn.map(project => 
                                <Project key = {project.name} project = {project} deployed = {false} />
                                )}
                        </div>
                    }
                    {conditions.solo === "solo" 
                    && conditions.college === "college" 
                    && conditions.deployed === "not-deployed"
                    &&  <div className="main--links">  
                            <legend>As projects from College, we were not authorized to deploy the applications, but you'll find Github links below</legend>
                            {dataScn.map(project =>
                                <Project key = {project.name} project = {project} deployed = {false} />
                                )}
                        </div>
                    }
                    {conditions.solo === "group" 
                    && <div className="main--links">
                            <legend>As projects from College, we were not authorized to deploy the applications, but you'll find Github links below</legend>
                            {dataG.map(project =>
                                <Project key = {project.name} project = {project} deployed = {false} />
                                )}
                        </div>
                    }
                </div>
            </main>        
        </>
        
    )
}

export default Main