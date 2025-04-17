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
                    I’m Andre Cruz - a {currentAge} year old Developer,who’s all about turning ideas into clean, functional websites. 
                    I graduated from <a href='https://www.centennialcollege.ca/' className='about-college' target='_blank' 
                    rel='noopener noreferrer'>Centennial College</a>in 2021 and since then, I’ve been focused on front-end development, 
                    especially with JavaScript and React - my favorite tech duo.
                    </p>
                    <br/>
                    <p style={{textIndent: '25px'}}>
                    I’m a pretty curious person — always learning, tweaking, and trying new things. Whether I’m diving deeper into React or 
                    experimenting with new design patterns, I love getting better at what I do. 
                    </p>
                    <br/>
                    <p style={{textIndent: '25px'}}>
                    Right now, I’m on the lookout for a full-time role or freelance projects where I can grow, build cool stuff, and work with awesome people. 
                    Let’s build something great together!
                    </p>
                    <br/>
                    <p style={{textIndent: '25px'}}> 
                        Please feel free to review my <label onClick={handleClick} className='about-label'>Projects section </label>
                        and look into some of my work.
                    </p>
                    <br/>
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

