import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import './About.css'
import { faCss3, faGithub, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const delay = 3;

    const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

    useEffect(
        () => {
            let timer1 = setTimeout(() => setLetterClass('text-animate-hover'), delay * 1000);

            return () => {
                clearTimeout(timer1);
            };
        },
        []
    );


    return (
        <>
        <div className='about'>
            <div className="aboutDet">
                <h1 className="aboutHead">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={aboutArray}
                        idx={15}
                    />
                </h1>
                <p className="aboutDetails">
                    I’m very ambitious front-end developer <br />
                    I'm quietly confident, naturally curious, and perpetually working on <br />  improving my chops one design problem at a time.
                </p>
            </div>
            <div className="aboutCube">
                <div className="cubeSpinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color='#183153' />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color='#254bdd' />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faSass} color='#ce679a' />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGithub} color='#24292f' />
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default About