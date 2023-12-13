import at from '../images/at.png'
import phone from '../images/phone-white.png'

function Contact(){
    return(
        <div className='contact-div'>
            <div className='contact-container'>
                <div className='phone-container'>
                    <img alt='' src={phone} className='phone-img' />
                    <a href='tel:+351915412318' className='phone'>+351 915412318</a>
                </div>
                <div className='email-container'>
                    <img alt='' src={at} className='email-img'/>
                    <a href='mailto:andremscruz10@hotmail.com' className='email'>andremscruz10@hotmail.com</a>
                </div>
                
            </div>
            
        </div>
    )
}

export default Contact