import React from "react";
import { FaGithub } from "react-icons/fa";

function OtherCard(props){
    return(
        <>
        <div className="other-cards-div" key={props.other.title}>
            <h3 className="other-cards-title">{props.other.title}</h3>
            <div className="other-cards-image-div">
                {props.other.link && 
                    <a href={props.other.link} target="blank" style={{backgroundColor: '#1e1e1e'}} className="other-cards-logo">
                        <img src={`/images/${props.other.image}`} alt="" style={{backgroundColor: '#1e1e1e'}}></img>
                    </a> 
                }
                <a href={props.other.gitLink} target="blank" className="other-cards-git" style={props.other.link ? null : {marginTop:'4px', fontSize:'unset'}}> 
                    <FaGithub style={props.other.link ? {backgroundColor: '#1e1e1e', marginTop: '25px'} : {backgroundColor: '#1e1e1e'}}/> 
                </a>
            </div>
        </div>
        </>
    )
}

export default OtherCard