import React, {useState, useEffect} from "react"
import { FaBriefcase, FaGraduationCap, FaTools , FaCertificate } from "react-icons/fa"
import { RiAccountPinCircleFill } from "react-icons/ri"
import Experience from "./Experience"
import DownloadButton from "./DownloadButton"
import { experiences } from "../data"


function Resume(){
    const [isExpanded, setIsExpanded] = useState(false)
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timeout = setTimeout(() => setAnimate(false), 1000); // remove class after animation
        return () => clearTimeout(timeout);
      }, []);

    function handleClick(){
        setIsExpanded(prevState => !prevState)
    }

    return(
        <div className="resume-div">
            {isExpanded ? ( 
                <Experience handleClick = {handleClick} experience = {experiences}/>
            ) : (
                <>
                    <div className="resume-profile-text">
                        <div className="resume-text-header">
                            <RiAccountPinCircleFill style={{ fontSize: '30px', marginBottom: '15px' }}/>
                            <DownloadButton/>
                        </div>
                        
                        <p className="profile-text">
                            I am a highly hardworking and dedicated professional who takes pride in consistently giving my best effort. I am passionate about learning 
                            new things, refining my existing skills, and embracing opportunities for growth. My goal is to contribute meaningfully to a dynamic and 
                            forward-thinking company, helping it thrive while fostering my own personal and professional development through collaboration and shared success.
                        </p>
                    </div>
                    <div className="resume-grid">
                        <div className="resume-column1">
                            <div className="profile-experiences">
                                <FaBriefcase className={`${animate ? 'bounce' : ''} resume-icons resume-expandable`} onClick={handleClick} />
                                <div className="profile-experiences-content">
                                    {experiences.map(exp =>
                                        <div key={exp.position}>
                                            <h3 className="resume-h3">{exp.position}</h3> 
                                            <h4 className="resume-h4"><i>{exp.company}</i> - {exp.location}</h4> 
                                            <span style={{ fontSize: 'small' }}>
                                                {exp.timeFrame}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                
                                
                            </div>
                            <div className="profile-education">
                                <FaGraduationCap className="resume-icons"/>

                                <h3 className="resume-h3">Software Engineering Technician </h3> 
                                <h4 className="resume-h4"><i>Centennial College</i> - Toronto</h4> 
                                <span style={{ marginBottom: '25px', fontSize: 'small' }}>
                                    January 2020 - April 2021
                                </span>

                            </div>
                            
                        </div>
                        <div className="resume-column2">
                            <div className="profile-skills">
                                <FaTools className="resume-icons"/>

                                <h3 className="resume-p">Hard Skills:</h3>
                                <p style={{ marginBottom: '15px' }}>
                                    Java • JavaScript • C# • HTML • CSS • MySQL • NoSQL
                                </p>

                                <h3 className="resume-p">Soft Skills:</h3>
                                <p style={{ marginBottom: '15px' }}>
                                    Problem Solving • Critical Thinking • Communication • Decision Making • Self-Motivation
                                </p>

                                <h3 className="resume-p">Languages:</h3>
                                <p >Portuguese (C2) • English (C1)</p>

                            </div>
                            <div className="profile-certifications">
                                <FaCertificate className="resume-icons"/>

                                <h3 className="resume-p"> Cursos em Vídeo: </h3>
                                <p className="resume-p">Java Object-Oriented Programming - 2022</p>
                                <p className="resume-p">MySQL - 2022</p>
                                <p className="resume-p" style={{ marginBottom: '15px' }}>JavaScript - 2023</p>

                                <h3 className="resume-p"> LinkedIn Learning: </h3>
                                <p className="resume-p">React Essential Training - 2025</p>       
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>  
    )
}

export default Resume