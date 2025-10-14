import React, { useState } from "react";
import {mainProjects} from "../data"
import { otherProjects } from "../data";
import MainCard from "./MainCard";
import OtherCard from "./OtherCard";
import Description from "./Description";

function Cards() {
    const [toggle, setToggle] = useState(false)
    const [showDescription, setShowDescription] = useState(false)
    const [description, setDescription] = useState({
        title: "",
        description: "",
        icon: "",
        img: "",
        live: "",
        repo: ""
    })

    function toggleFunction(){
        setToggle(prevState => !prevState)
    }
    function showDesc(card){
        setShowDescription(prevState => !prevState)
        setDescription(card)
    }

    return(
        <>
            {!showDescription ?
            <>
            <main className="main--cards">
                <div className="cards-div">
                    {
                      mainProjects.map(main =>
                        <MainCard key={main.title} main={main} handleClick={showDesc}/>
                        )   
                    }
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
            :
            <Description description={description} />
            }
            
        </>
    )
}
export default Cards