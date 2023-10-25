import React, { useState } from "react";

function Main(){

    const[solo, setSolo] = useState(
        {
            solo: ""
        })
    let content

    function handleChange(event){
        const {name, value} = event.target
        setSolo(prevState => ({
            ...prevState,
            [name]: value
        }))

        if(value === "solo"){
            content = "solo"
            console.log(content)
        }
        else if(value === "group"){
            content = "group"
            console.log(content)
        }
    }
    
    

    return(
        <main>
            <div className="main--select">
                <label htmlFor="select">
                    Here you can choose to have a look at the Projects I'm most proud of having participated
                </label>
                <br/>
                <select id="select" onChange={handleChange} name="select" value={solo.solo}>
                    <option value={""}>-- Please choose an option --</option>
                    <option value={"solo"}>Solo Projects</option>
                    <option value={"group"}>Group Projects</option>
                </select>
            </div>
            <div className="main--content">
            {content === "solo" && <h1>solo content</h1>}
            {content === "group" && <h1>group content</h1>}
            </div>
        </main>        
    )
}

export default Main