import React from "react"

function Footer(props){
    return(
        <footer 
            style={{marginLeft: props.sidebarShow ? '16%':'0', width: props.sidebarShow ? '80%': '100%'}} 
            className="footer"
        > 
            Andre Mariano Sousa Cruz &#169; Copyright 2023 
        </footer> 
    )
}

export default Footer