import './contact.css'
import callme from '../../Assets/CallMe.png'
import email from '../../Assets/email.png'
import location from '../../Assets/Location.png'
import { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'

const Contact = () => {
    const formRef = useRef()
    const [done,setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();emailjs.sendForm('service_yr8fvig', 'template_4sobe2r', formRef.current, 'pndzEwJtLCR35pqgI')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className='Contact'>
        {/* <div className="Contact-bg"></div> */}
        <div className="Contact-wrapper">
            <div className="Contact-Left">
                <h1 className="Contact-title">Let's Discuss with me</h1>
                <div className="Contact-Info">
                    <div className="Contact-Info-Item">
                        <img src={callme} alt="" className="Contact-Icon" />
                        0838 4519 9458
                    </div>
                    <div className="Contact-Info-Item">
                        <img src={email} alt="" className="Contact-Icon" />
                        yehoshuayohan1999@gmail.com
                    </div>
                    <div className="Contact-Info-Item">
                        <img src={location} alt="" className="Contact-Icon" />
                        Terate Street Number 12, alley 2, Taman Sub-district, Banjarejo Village, Madiun City, INDONESIA
                    </div>
                </div>
            </div>
            <div className="Contact-Right">
                <p className="Contact-desc">
                    <b>What's your story?!</b> Please contact me if you have an important topic and need to talk about it. And Please contact me if you want to tell stories with me
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name'  />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject'  />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name='user_email'  />
                    <textarea  style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message' name='message'></textarea>
                    <button>Submit</button>
                    <p>{done && 'Submited!!'}</p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
