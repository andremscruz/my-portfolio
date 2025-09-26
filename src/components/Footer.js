import React from "react"

function Footer(){

    let currentYear = new Date().getFullYear()
    
    return(
        <footer className="footer">
            <p>Andre Mariano Sousa Cruz &#169;</p>
            <p>Copyright 2023 - {currentYear}</p> 
        </footer> 
    )
}

export default Footer