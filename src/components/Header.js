import React from "react"
import menu from '../images/menu-white.png'
import close from '../images/close-white.png'
import {pages} from '../data'

function Header(props){

    return(
        <header>
            <div className="header">
                {props.sidebarShow 
                ? 
                    <nav >
                    <img alt="" src={close} onClick={props.handleClick} className="header--toggle" />
                        <ul className="header--nav">
                            {pages.map(page => 
                                <li key={page.id} onClick={() => props.setCurrentPage(page.text)}>
                                    <img alt="" src={`/images/${page.whiteimg}`} className="header--nav-img"/>
                                    {page.text}
                                </li>
                            )}
                        </ul>
                    </nav>
                : 
                <div>
                    <img alt="" src={menu} onClick={props.handleClick} className="header--toggle" />
                </div>
                }
            </div>
        </header>
        
    )
}

export default Header