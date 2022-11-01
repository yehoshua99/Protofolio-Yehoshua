import './About.css'
import me from '../../Assets/Profil.png'
import education from '../../Assets/bachelor.png'
import work from '../../Assets/work.png'
import organisasi from '../../Assets/Organisasi.png'
import skill from '../../Assets/skill.png'
const About = () => {
  return (
    <div className='About'>
      <div className="About-left">
        <div className="About-card bg"></div>
        <div className="About-card">
            <img src={me} alt="" className="About-img" />
        </div>
      </div>
      <div className="About-right">
        <h1>About Me</h1>
        <p className='About-desc'>I am an Bachelor of Education majoring in Informatics and Computer Engineering from Satya Wacana Christian University. During college, I participated in Oracle Database training until I got a certificate in Database Design and Programming using SQl and had practical teaching experience at SMK Negeri 3 Salatiga for 6 months where I gave and explained the material and participated in developing students' ability to introduce and operate computers. After completing my bachelor's degree, I was interested in entering the world of Web Development, so I added to the knowledge I had gained during college by taking part in training as a Front End Engineer at Binar Academy, until now the training programme is still running until December. I have a responsible and conscientious personality, able to work in teams or individually, and have a desire to learn and develop in new fields.</p>
            <div className="About-Education">
                <img src={education} alt="" className="About-Education-img" />
                <div className='About-desc-Edu'>
                    <div className="About-Education-Teks">
                        <h4 className="About-Education-title">SMK Cendekia</h4>
                        <p>Majors : Multimedia</p>
                        <p>2014-2017</p>
                    </div>
                    <div className="About-Education-Teks">
                        <h4 className="About-Education-title">Satya Wacana Christian University</h4>
                        <p>Majors : Education Informatics and Computer Engineering</p>
                        <p>2017-2022</p>
                        <p>GPA: 3.71</p>
                    </div>
                </div>
            </div>

            <div className="About-OrganizationAndWork">
                <img src={work} alt="" className="About-OrganizationAndWork-img" />
                <div className="About-OrganizationAndWork-desc">
                    <div className="About-OrganizationAndWork-Teks">
                        <h4 className='About-OrganizationAndWork-title'>CV. Brinn Putra Perkasa “B+” Advertising – Madiun, Indonesia</h4>
                        <p>Field Industrial practice</p>
                        <p>June 2016 – August 2016</p>
                        <p>Desc:</p>
                        <p>1. Participate in observing and participating directly in serving consumers who will
                        ordering design banners, roll banners, x banners, etc.</p>
                        <p>2. Directly participate in the production process and print banner designs that are done digitally.
                        production and printing process which is digitalised.</p>
                    </div>

                    <div className="About-OrganizationAndWork-Teks">
                        <h4 className='About-OrganizationAndWork-title'>SMK Negeri 3 Salatiga– Salatiga, Indonesia</h4>
                        <p>Intern Teacher</p>
                        <p>September 2020 – Maret 2021</p>
                        <p>Desc:</p>
                        <p>1. Set up and maintain the computer lab of SMK Negeri 3 Salatiga.</p>
                        <p>2. Provide and elaborate materials and participate in developing students' ability to introduce and operate computers.</p>
                        <p>3. Assist and create student work assessment documents to facilitate administration.</p>
                        <p>4. Assist and create online student personal data documents to facilitate school administration.</p>
                    </div>
                    
                </div>
            </div>
            <div className="About-Organisation">
                <img src={organisasi} alt="" className="About-Organisation-img" />
                <div className='About-desc-Organisation'>
                    <div className="About-Organisation-Teks">
                        <h4 className="About-Organisation-title">Organisers of "The Art Of Theaching 2019" – Salatiga, Indonesia</h4>
                        <p>consumption committee</p>
                        <p>February 2019</p>
                    </div>
                </div>
            </div>

            <div className="About-Skill">
                <img src={skill} alt="" className="About-Skill-img" />
                <div className='About-desc-Skill'>
                    <div className="About-Skill-Teks">
                        <h4 className="About-Skill-title">1. Fornt End Developer field knowledge (HTML, CSS, Javascript, ReactJs) - (Beginner-Intermediate)</h4>
                        <h4 className="About-Skill-title">2. Editing Video (Beginner-Intermediate)</h4>
                        <h4 className="About-Skill-title">3. Microsoft Office (Word, Excel, Power Point)</h4>
                        <h4 className="About-Skill-title">4.Musik</h4>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About