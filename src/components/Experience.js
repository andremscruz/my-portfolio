import React from "react"
import { experiences } from "../data"

function Experience({ handleClick }) {
    return (
        <div className="experience-div">
            <div className="experience-topDiv">
                 
                <div className='experience-cross' onClick={handleClick}>
                    <div className="BackSlash"></div>
                    <div className="ForwardSlash"></div>
                </div>
            </div>
            <div className="profile-experiences-content">
                {experiences.map(exp =>
                    <div key={exp.position}>
                        <h3 className="resume-h3">{exp.position}</h3> 
                        <h4 className="resume-h4"><i>{exp.company}</i> - {exp.location}</h4> 
                        <span style={{ fontSize: 'small' }}>
                            {exp.timeFrame}
                        </span>
                        <p style={{marginTop: '17.5px', textAlign: 'justify'}}>{exp.description}</p>
                        <h4 style={{marginTop: '17.5px'}}>Key responsabilities:</h4>
                        <ul>
                            {exp.routine.map(task => (
                                <li className="experience-tasks" key={task}>{task}</li>
                            ))}
                        </ul>
                        <div style={{width: '100%', background: '#21222A', height: '3px'}}></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Experience
