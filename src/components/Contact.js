import construction from '../images/construction.png'

function Contact(props){
    return(
        <div style={{marginLeft: props.sidebarShow ? '16%':'0'}}>
            <h1 className="about--me">Contact</h1>
            <div className='about-c-container'>
                <h5>UNDER CONSTRUCTION</h5>
                <img alt="" src={construction} className='about-c'/>
            </div>
            
        </div>
    )
}

export default Contact