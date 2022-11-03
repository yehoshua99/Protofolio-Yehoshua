import './toggle.css'
import sun from '../../Assets/Sun.png'
import moon from '../../Assets/Moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context'

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }

  return (
    <div className="Toggle">
        <img src={sun} alt="" className="Toggle-icon" />
        <img src={moon} alt="" className="Toggle-icon" />
        <div className="Toogle-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toggle
