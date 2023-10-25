import React, { useState } from "react";
import Inputs from "./Inputs";
import "../css/Main.css"

function Main(){

    const[conditions, setConditions] = useState(
        {
            solo: "",
            college: "",
            deployed: ""
        })    

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
        <main>
            <Inputs conditions={conditions} handleChange={handleChange}/>
            <div className="main--content">
                {conditions.solo === "solo" 
                && conditions.college === "college" 
                && conditions.deployed === "not-deployed"
                && <a href = ""></a>}
                {conditions.solo === "solo" 
                && conditions.college === "post-college" 
                && conditions.deployed === "deployed"
                && <a href = ""></a>}
            </div>
        </main>        
    )
}

export default Main