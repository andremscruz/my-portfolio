import React from "react"
import profilePicture from "../images/ProfilePicture.jpeg"
import "../css/Header.css"

function Header(){
    return(
        <header>
            <nav className="header">
            <div>
                <h1 className="header--title">Software Developer</h1>
                <h4 className="header--name">André Mariano Sousa Cruz</h4>
            </div>
            <img alt="" src={profilePicture} className="header--image"/>
            </nav>
        </header>
        
    )
}

export default Header