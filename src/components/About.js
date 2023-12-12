import construction from '../images/construction.gif'

function About(props){
    return(
        <div style={{marginLeft: props.sidebarShow ? '16%':'0'}}>
            <h1 className="about--me">About Me</h1>
            <div className='about-c-container'>
                <h5>IN PROGRESS</h5>
                <img alt="" src={construction} className='about-c'/>
            </div>
            
        </div>

        
    )
}

export default About