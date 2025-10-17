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
        icon: "",
        title: "",
        stack:{frontend: [], backend: []},
        context: "",
        challenge: "",
        solution: "",
        result: ""
    })

    function toggleFunction(){
        setToggle(prevState => !prevState)
    }
    function showDesc(cardIcon, cardTitle, cardStack, cardContext, cardChallenge, cardSolution, cardResult){
        setShowDescription(prevState => !prevState)
        setDescription({
            icon: cardIcon,
            title: cardTitle,
            stack: cardStack,
            context: cardContext,
            challenge: cardChallenge,
            solution: cardSolution,
            result: cardResult
        })
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
            <Description description={description} handleClick={showDesc}/>
            }
            
        </>
    )
}
export default Cards