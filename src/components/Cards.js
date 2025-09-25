import React from "react";
import {mainProjects} from "../data"
import CardComponent from "./CardComponent";


function Cards() {
    return(
        <>
            <div className="cards-div">
                {mainProjects.map(main =>
                    <CardComponent key={main.title} main={main}/>
                )}
            </div>
        </>
    )
}
export default Cards