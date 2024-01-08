import React from "react"

function Footer(){

    let currentYear = new Date().getFullYear()
    
    return(
        <footer className="footer"> 
            Andre Mariano Sousa Cruz &#169; Copyright 2023 - {currentYear}
        </footer> 
    )
}

export default Footer