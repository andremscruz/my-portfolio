import React, { useState } from "react";
import Inputs from "./Inputs";
import Project from "./Project";
import gitHub from "../images/gitHub.png"
import trollFace from "../images/trollFace.png"
import airbnb from "../images/airbnb.png"
import portfolio from "../images/portfolio.png"
import dice from "../images/dice.png"
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
                            <Project 
                                name = "My profile Application" 
                                gitLink = "https://github.com/andremscruz/MyProfile"
                                gitImage = {gitHub}
                                deployed = {false} />

                            <Project 
                                name = "Books Application" 
                                gitLink = "https://github.com/andremscruz/BooksApp"
                                gitImage = {gitHub}
                                deployed = {true} />
                        </div>
                    }
                    {conditions.solo === "solo" 
                    && conditions.college === "post-college" 
                    && conditions.deployed === "deployed"
                    && <div className="main--links"> 
                            <legend>These are more complex Applications, all programmed using React framework</legend> 
                            <Project 
                                name = "Airbnb clone" 
                                link = "https://luxury-tarsier-eca883.netlify.app/"
                                image = {airbnb}
                                gitLink = "https://github.com/andremscruz/airbnb-clone"
                                gitImage = {gitHub}
                                deployed = {true} />
                        
                            <Project 
                                name = "Meme generator" 
                                link = "https://stunning-sorbet-5933c5.netlify.app/"
                                image = {trollFace}
                                gitLink = "https://github.com/andremscruz/meme-generator"
                                gitImage = {gitHub}
                                deployed = {true} />

                            <Project 
                                name = "Tenzies game" 
                                link = "https://illustrious-starburst-0b7773.netlify.app/"
                                image = {dice}
                                gitLink = "https://github.com/andremscruz/tenzies-game"
                                gitImage = {gitHub}
                                deployed = {true} />

                            <Project 
                                name = "My Portfolio(this)" 
                                link = "https://inspiring-zuccutto-814952.netlify.app/"
                                image = {portfolio}
                                gitLink = "https://github.com/andremscruz/my-portfolio"
                                gitImage = {gitHub}
                                deployed = {true} />
                        </div>
                    }
                    {conditions.solo === "solo"
                    && conditions.college === "post-college"
                    && conditions.deployed === "not-deployed"
                    && <div className="main--links">
                            <legend>These are simpler codes that I programmed when I was reviewing JavaScript</legend>
                            <Project 
                                name = "Multiplication table Application" 
                                gitLink = "https://github.com/andremscruz/multiplication-table"
                                gitImage = {gitHub}
                                deployed = {false} />

                            <Project 
                                name = "Counter Application" 
                                gitLink = "https://github.com/andremscruz/counter-exercise"
                                gitImage = {gitHub}
                                deployed = {false} />

                            <Project 
                                name = "Numbers Application" 
                                gitLink = "https://github.com/andremscruz/Numbers-exercise"
                                gitImage = {gitHub}
                                deployed = {false} />
                        </div>
                    }
                    {conditions.solo === "group" 
                    && <div className="main--links">
                            <legend>As projects from College, we were not authorized to deploy the applications, but you'll find Github links below</legend>
                            <Project 
                                name = "Phonnect Social Media" 
                                gitLink = "https://github.com/COMP231W21-G3/COMP231W21_G3_PHONNECT"
                                gitImage = {gitHub}
                                deployed = {false} />

                            <Project 
                                name = "SurveyCone Application" 
                                gitLink = "https://github.com/comp229-group7/group-project"
                                gitImage = {gitHub}
                                deployed = {false} />
                        </div>
                    }
                </div>
            </main>        
        </>
        
    )
}

export default Main