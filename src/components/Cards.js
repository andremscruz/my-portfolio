import React, { useState } from "react";
import {mainProjects} from "../data"
import { otherProjects } from "../data";
import { FaGithub } from "react-icons/fa";
import CardComponent from "./CardComponent";

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
                        <CardComponent key={main.title} main={main}/>
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
                        <div className="other-cards-div" key={other.title}>
                            <h3 className="other-cards-title">{other.title}</h3>
                            <div className="other-cards-image-div">
                                <a href={other.link} target="blank" style={{backgroundColor: '#1e1e1e'}}>
                                    <img src={`/images/${other.image}`} alt="" className="other-cards-logo"></img>
                                </a>
                                <a href={other.gitLink} target="blank" className="other-cards-git"> 
                                    <FaGithub style={{backgroundColor: '#1e1e1e'}}/> 
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            }
        </>
    )
}
export default Cards