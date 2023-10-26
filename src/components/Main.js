import React, { useState } from "react";
import Inputs from "./Inputs";
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
                            <a href = "https://github.com/andremscruz/MyProfile">My Profile Application</a>
                            <a href = "https://github.com/andremscruz/BooksApp">Books App Application</a>
                        </div>
                    }
                    {conditions.solo === "solo" 
                    && conditions.college === "post-college" 
                    && conditions.deployed === "deployed"
                    && <div className="main--links">
                            <legend>These are more complex Applications, all programmed using React framework</legend> 
                            <div className="main--scrimba">
                                <legend>Find below Github and Website links for my Airbnb Clone</legend>
                                <a href="https://github.com/andremscruz/airbnb-clone">Github link</a>
                                <a href="https://luxury-tarsier-eca883.netlify.app/">Airbnb Clone</a>
                            </div>
                            <div className="main--scrimba">
                                <legend>Find below Github and Website links for my Meme generator</legend>
                                <a href="https://github.com/andremscruz/meme-generator">Github link</a>
                                <a href="https://stunning-sorbet-5933c5.netlify.app/">Meme generator</a>
                            </div>
                            <div className="main--scrimba1">
                                <a href = "https://github.com/andremscruz/my-portfolio">This is the Github link for the Website you're in right now</a>
                            </div>   
                            
                        </div>
                    }
                    {conditions.solo === "solo"
                    && conditions.college === "post-college"
                    && conditions.deployed === "not-deployed"
                    && <div className="main--links">
                            <legend>These are simpler codes that I programmed when I was reviewing JavaScript</legend>
                            <a href="https://github.com/andremscruz/multiplication-table">Multiplication table</a>
                            <a href="https://github.com/andremscruz/counter-exercise">Counter exercise</a>
                            <a href="https://github.com/andremscruz/Numbers-exercise">Numbers exercise</a>
                        </div>
                    }
                    {conditions.solo === "group" 
                    && <div className="main--links">
                            <legend>As projects from College, we were not authorized to deploy the applications, but you'll find Github links below</legend>
                            <a href="https://github.com/comp229-group7/group-project">Surveys Application</a>
                            <a href="https://github.com/COMP231W21-G3/COMP231W21_G3_PHONNECT">Phonnect Social Media</a>
                        </div>
                    }
                </div>
            </main>        
        </>
        
    )
}

export default Main