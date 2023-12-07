import './About.css'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'
import { useState, useEffect } from 'react'

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
                    <div className="face1" />
                    <div className="face2" />
                    <div className="face3" />
                    <div className="face4" />
                    <div className="face5" />
                    <div className="face6" />
                </div>
            </div>
        </div>

        </>
    )
}

export default About