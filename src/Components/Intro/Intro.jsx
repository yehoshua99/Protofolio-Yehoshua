import "./intro.css"
import me from '../../Assets/Profil.png'
const Intro = () => {
  return (
    <div className="intro">
        <div className="intro-left">
            <div className="intro-left-wrapper">
                <h2 className="intro-intro">Hello, My name is </h2>
                <h1 className="intro-name">Yehoshua Yohan Ary Anando</h1>
                <div className="intro-title">
                    <div className="intro-title-wrapper">
                        <div className="intro-title-item">I can :</div>
                        <div className="intro-title-item">Front-End Web Developer</div>
                        <div className="intro-title-item">Editing Video</div>
                        <div className="intro-title-item">Microsoft Office</div>
                        <div className="intro-title-item">Music</div>
                    </div>
                </div>
                <div className="intro-desc">
                    Hai! I was born in Madiun City on 02 January 1999. I can be called by "Ye" or "Yohan". And now I am interested in the world of Web Developer, especially in the field of Front End Engineer.I am an Bachelor of Education majoring in Informatics and Computer Engineering from Satya Wacana Christian University. During college, I participated in Oracle Database training until I got a certificate in Database Design and Programming using SQl and had practical teaching experience at SMK Negeri 3 Salatiga for 6 months where I gave and explained the material and participated in developing students' ability to introduce and operate computers. 
                </div>
            </div>
        </div>
        <div className="intro-right">
            <div className="intro-profil-bg"></div>
            <img src={me} alt="" className="intro-img" />
        </div>
    </div>
  )
}

export default Intro
