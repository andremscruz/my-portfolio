import React from "react";
import {mainProjects} from "../data"
import Tag from "./StackTag";

function Cards() {
    return(
        <>
            <div>
                {mainProjects.map(main =>
                <>
                    <h1>{main.title}</h1>
                    <p>{main.description}</p>
                    <Tag stack={main.stack} />
                    <button>See more</button>
                </> 
                
                
                )}
            </div>
        </>
    )
}
export default Cards