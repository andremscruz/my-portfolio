import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";

function Contact(){
    return(
        <div className='contact-div'>
            <div className='contact-container'>
                <div className='phone-container'>
                    <IoIosPhonePortrait style={{fontSize: '50px'}} className='phone-img' />
                    <a href='tel:+351915412318' className='phone'>+351 915412318</a>
                </div>
                <div className='email-container'>
                    <MdEmail style={{fontSize: '40px'}} className='email-img'/>
                    <a href='mailto:andremscruz10@hotmail.com' className='email'>andremscruz10@hotmail.com</a>
                </div>
                
            </div>
            
        </div>
    )
}

export default Contact