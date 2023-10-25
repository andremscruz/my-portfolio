import React, { useState } from "react";
import Inputs from "./Inputs";
import "../css/Main.css"

function Main(){

    const[conditions, setConditions] = useState(
        {
            solo: "",
            college: "",
            deployed: ""
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
        <main>
            <Inputs conditions={conditions} handleChange={handleChange}/>
            <div className="main--content">
                {conditions.solo === "solo" 
                && conditions.college === "college" 
                && conditions.deployed === "not-deployed"
                &&  <div>
                        <legend>As projects from College, we were not authorized to deploy the applications, but you'll find Github links below</legend>
                        <a href = "https://github.com/andremscruz/MyProfile">My Profile Application</a>
                        <br/>
                        <a href = "https://github.com/andremscruz/BooksApp">Books App Application</a>
                    </div>
                }
                {conditions.solo === "solo" 
                && conditions.college === "post-college" 
                && conditions.deployed === "deployed"
                && <div>
                        <legend>These are more complex Applications, all programmed using React framework</legend>
                        <a href = "https://github.com/andremscruz/my-portfolio">This is the Github link for the Website you're in right now</a>
                        <br/>
                        <legend>Find below Github and Website links for my Airbnb Clone application</legend>
                        <a href="https://github.com/andremscruz/airbnb-clone">Github link</a>
                        <br/>
                        <a href="https://luxury-tarsier-eca883.netlify.app/">Website</a>
                        <br/>
                        <legend>Find below Github and Website links for my Meme generator application</legend>
                        <a href="https://github.com/andremscruz/meme-generator">Github link</a>
                        <br/>
                        <a href="https://stunning-sorbet-5933c5.netlify.app/">Website</a>
                    </div>
                }
                {conditions.solo === "solo"
                && conditions.college === "post-college"
                && conditions.deployed === "not-deployed"
                && <div>
                        <legend>These are simpler codes that I programmed when I was reviewing JavaScript</legend>
                        <a href="https://github.com/andremscruz/multiplication-table">Multiplication table</a>
                        <br/>
                        <a href="https://github.com/andremscruz/counter-exercise">Counter exercise</a>
                        <br/>
                        <a href="https://github.com/andremscruz/Numbers-exercise">Numbers exercise</a>
                    </div>
                }
                {conditions.solo === "group" 
                && <div>
                        <legend>As projects from College, we were not authorized to deploy the applications, but you'll find Github links below</legend>
                        <a href="https://github.com/comp229-group7/group-project">Surveys Application</a>
                        <br/>
                        <a href="https://github.com/COMP231W21-G3/COMP231W21_G3_PHONNECT">Phonnect Social Media</a>
                    </div>
                }
            </div>
        </main>        
    )
}

export default Main