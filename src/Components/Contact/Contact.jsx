import './contact.css'
import callme from '../../Assets/CallMe.png'
import email from '../../Assets/email.png'
import location from '../../Assets/Location.png'

const Contact = () => {
  return (
    <div className='Contact'>
        <div className="Contact-bg"></div>
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
                <div className="Contact-desc">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
