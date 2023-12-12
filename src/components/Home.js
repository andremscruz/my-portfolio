import linkedin from '../images/linkedin.png'
import github from '../images/gitHub-white.png'

function Home(props){
    return(
        <div style={{marginLeft: props.sidebarShow ? '16%':'0'}}>
            <div className='home--links'>
                <a href='https://www.linkedin.com/in/andremscruz/' className='home--img'>
                    <img className="img" alt="" src={linkedin}/>
                </a>
                <a href='https://github.com/andremscruz' className='home--img'>
                    <img className="img" alt="" src={github}/>
                </a>
            </div>
        </div>
       
    )
}

export default Home