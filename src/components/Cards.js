import React, { useState } from "react";
import {mainProjects} from "../data"
import { otherProjects } from "../data";
import MainCard from "./MainCard";
import OtherCard from "./OtherCard";

function Cards() {
    const[toggle, setToggle] = useState(false)

    function toggleFunction(){
        setToggle(prevState => !prevState)
    }
    return(
        <>
            <main className="main--cards">
                <div className="cards-div">
                    {mainProjects.map(main =>
                        <MainCard key={main.title} main={main}/>
                    )}
                </div>
            </main>
            <div className="expand-projects-div" onClick={toggleFunction}>
                <div className='expand-projects'>
                    <div className={toggle ? "BackSlash-expanded" : "BackSlash-expand"}></div>
                    <div className={toggle ? "ForwardSlash-expanded"  : "ForwardSlash-expand"}></div>
                </div>
                {!toggle && <p className="expand-projects-text">More Projects</p>}
            </div>
            {toggle &&
                <div className="more-projects-cards">
                    {otherProjects.map(other =>
                        <OtherCard key={other.title} other={other}/>
                    )}
                </div>
            }
        </>
    )
}
export default Cards