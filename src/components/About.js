import linkedin from '../images/linkedin.png'
import github from '../images/gitHub-white.png'

function About(props){

    function handleClick(){
        props.setCurrentPage("Projects")
    }

    function calculateAge() {
        const currentDate = new Date()
    
        let age = currentDate.getFullYear() - 1999
    
        if (currentDate.getMonth() < 5 || (currentDate.getMonth() === 5 && currentDate.getDate() < 13)) {
            age--
        }
    
        return age
    }

    const currentAge = calculateAge()

    return(
        <div className='about-div'>
            <h1 style={{textAlign: 'center', marginTop: '30px'}}>Hello there!</h1>
            <div className='about-text'>
                    <p style={{textIndent: '25px'}}>
                        My name is Andre Cruz, I'm a {currentAge} year old Developer, graduated in Software Engineering Technician
                        at <a href='https://www.centennialcollege.ca/' className='about-college' target='_blank' 
                            rel='noopener noreferrer'>Centennial College</a>in 2021. 
                        I'm eager to learn, very focused and dedicated about things I'm passionate, like coding. 
                        I like to improve skills I already have, as well as learn new things. I have good knowledge in a 
                        few programming languages, with JavaScript being my favorite one. Recently, I have been studying, 
                        developing and having a very good time with React.
                    </p>
                    <br/>
                    <p style={{textIndent: '25px'}}>
                        After working as a Freelancer, mostly with activities of my own, I started working on a company as
                        a Product Implementation specialist on a SaaS company, creating many different pop-ups and forms 
                        aiming to offer our clients with the best options to user interaction on their website, for desired purposes.
                    </p>
                    <br/>
                    <p style={{textIndent: '25px'}}> 
                        Please feel free to review my <label onClick={handleClick} className='about-label'>Projects section </label>
                        and look into some of my work.
                    </p>
                    <br/>
                    <br/>
                    <p><strong>Certifications:</strong> Java OOP, MySQL, JavaScript</p>
            </div>
            <div className='about--links'>
                <a href='https://www.linkedin.com/in/andremscruz/' target='_blank' rel='noopener noreferrer' className='about--img'>
                    <img className="img" alt="" src={linkedin}/>
                </a>
                <a href='https://github.com/andremscruz' target='_blank' rel='noopener noreferrer' className='about--img'>
                    <img className="img" alt="" src={github}/>
                </a>
            </div>
        </div>
       
    )
}

export default About

