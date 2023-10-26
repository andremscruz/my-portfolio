import React, { useState } from "react";
import Inputs from "./Inputs";
import gitHub from "../images/gitHub.png"
import trollFace from "../images/trollFace.png"
import airbnb from "../images/airbnb.png"
import portfolio from "../images/portfolio.png"
import "../css/Main.css"

function Main(){

    const[conditions, setConditions] = useState(
        {
            solo: "solo",
            college: "post-college",
            deployed: "deployed"
        })    

    function handleChange(event) {
        const { name, value } = event.target;
        
        if (name === "college" && value === "college") {
            setConditions(prevState => (
            {
                ...prevState,
                college: "college",
                deployed: "not-deployed"
            }));
        } 
        else if(name === "solo" && value === "group"){
            setConditions(prevState => (
            {
                ...prevState,
                solo: "group",
                college: "college",
                deployed: "not-deployed"
            }))
        }
        else {
              setConditions((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    }


    return(
        <>
            <div className="main--welcome--container">
                <h1 className="main--welcome">Welcome to my Portfolio !</h1>
            </div>
            <main className="main--content">
                <Inputs conditions={conditions} handleChange={handleChange}/>
                <div>
                    {conditions.solo === "solo" 
                    && conditions.college === "college" 
                    && conditions.deployed === "not-deployed"
                    &&  <div className="main--links">
                            <legend>As projects from College, we were not authorized to deploy the applications, but you'll find Github links below</legend>
                            <div className="main">
                                <legend>My Profile Application</legend>
                                <a 
                                    href="https://github.com/andremscruz/MyProfile">
                                        <img className="img" alt="" src={gitHub}/>
                                </a>
                            </div>
                            <div className="main">
                                <legend>Books Application</legend>
                                <a 
                                    href="https://github.com/andremscruz/BooksApp">
                                        <img className="img" alt="" src={gitHub}/>
                                </a>
                            </div>
                        </div>
                    }
                    {conditions.solo === "solo" 
                    && conditions.college === "post-college" 
                    && conditions.deployed === "deployed"
                    && <div className="main--links">
                            <legend>These are more complex Applications, all programmed using React framework</legend> 
                            <div className="main">
                                <a 
                                    href="https://luxury-tarsier-eca883.netlify.app/">
                                        <img className="img" alt="" src={airbnb}/>
                                </a>
                                <legend>Airbnb clone</legend>
                                <a 
                                    href="https://github.com/andremscruz/airbnb-clone">
                                        <img className="img" alt="" src={gitHub}/>
                                </a>
                            </div>
                            <div className="main">
                                <a 
                                    href="https://stunning-sorbet-5933c5.netlify.app/">
                                        <img className="img" alt="" src={trollFace}/>
                                </a>
                                <legend>Meme generator</legend>
                                <a 
                                    href="https://github.com/andremscruz/meme-generator">
                                        <img className="img" alt="" src={gitHub}/>
                                </a>
                            </div>
                            <div className="main">
                                <a 
                                    href="https://inspiring-zuccutto-814952.netlify.app/">
                                        <img style={{borderRadius: "50%"}} className="img" alt="" src={portfolio}/>
                                </a>
                                <legend>My Portfolio(this)</legend>
                                <a 
                                    href = "https://github.com/andremscruz/my-portfolio">
                                        <img className="img" alt="" src={gitHub}/>
                                </a>
                            </div>   
                            
                        </div>
                    }
                    {conditions.solo === "solo"
                    && conditions.college === "post-college"
                    && conditions.deployed === "not-deployed"
                    && <div className="main--links">
                        <legend>These are simpler codes that I programmed when I was reviewing JavaScript</legend>
                            <div className="main">
                                <legend>Mutiplication table Application</legend>
                                <a 
                                    href="https://github.com/andremscruz/multiplication-table">
                                        <img className="img" alt="" src={gitHub}/>
                                </a>
                            </div>
                            <div className="main">
                                <legend>Counter Application</legend>
                                <a 
                                    href="https://github.com/andremscruz/counter-exercise">
                                        <img className="img" alt="" src={gitHub}/>
                                </a>
                            </div>
                            <div className="main">
                                <legend>Numbers Application</legend>
                                <a 
                                    href="https://github.com/andremscruz/Numbers-exercise">
                                        <img className="img" alt="" src={gitHub}/>
                                </a>
                            </div>
                        </div>
                    }
                    {conditions.solo === "group" 
                    && <div className="main--links">
                            <legend>As projects from College, we were not authorized to deploy the applications, but you'll find Github links below</legend>
                            <div className="main">
                                <legend>Phonnect Social Media</legend>
                                <br/>
                                <a 
                                    href="https://github.com/COMP231W21-G3/COMP231W21_G3_PHONNECT">
                                        <img className="img" alt="" src={gitHub}/>
                                </a>
                            </div>
                            <div className="main">
                                <legend>SurveyCone Application</legend>
                                <br/>
                                <a 
                                    href="https://github.com/comp229-group7/group-project">
                                        <img className="img" alt="" src={gitHub}/>
                                </a>
                            </div>
                        </div>
                    }
                </div>
            </main>        
        </>
        
    )
}

export default Main