import React from "react"
import {pages} from '../data'

function Header(props){

    return(
        <header>
            
                    <nav >
                        <ul className="header--nav">
                            {pages.map(page => 
                                <li key={page.id} onClick={() => props.setCurrentPage(page.text)}>
                                    <img alt="" src={`/images/${page.whiteimg}`} className="header--nav-img"/>
                                    <p className="header-text">{page.text}</p>
                                </li>
                            )}
                        </ul>
                    </nav>
           
        </header>
        
    )
}

export default Header