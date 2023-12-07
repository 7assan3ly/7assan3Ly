import React from 'react'
import './Sidebar.css'
import  hLogo  from '../../assets/images/hLogo.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className='logoHolder'>
            <img src={hLogo} alt='logo' />
            {/* <p className="logoName">Hassan</p> */}
        </div>

        <nav className='navLinks'>
            <NavLink exact activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#bcb7b7" />
            </NavLink>

            <NavLink activeClassName="active" className="aboutLink" to="/about">
                <FontAwesomeIcon icon={faUser} color="#bcb7b7" />
            </NavLink>

            <NavLink activeClassName="active" className="portfolioLink" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#bcb7b7" />
            </NavLink>

            <NavLink activeClassName="active" className="contactLink" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#bcb7b7" />
            </NavLink>
        </nav>

        <ul className='socialList'>
            <li className='socialItem'>
                <a href="https://www.linkedin.com/in/7assan3ly/" target="_blank">
                    <FontAwesomeIcon className='listIcon' icon={faLinkedin} color="#bcb7b7" />
                </a>
            </li>
            
            <li className='socialItem'>
                <a href="https://github.com/7assan3ly" target="_blank">
                    <FontAwesomeIcon className='listIcon' icon={faGithub} color="#bcb7b7" />
                </a>
            </li>

            <li className='socialItem'>
                <a href="mailto:7assan3ly07@gmail.com" target="_blank">
                    <FontAwesomeIcon className='listIcon' icon={faEnvelope} color="#bcb7b7" />
                </a>
            </li>

            <li className='socialItem'>
                <a href="https://api.whatsapp.com/send?phone=02001064583993" target="_blank">
                    <FontAwesomeIcon className='listIcon' icon={faSquareWhatsapp} color="#bcb7b7" />
                </a>
            </li>

        </ul>
    </div>
  )
}

export default Sidebar