import React, { useEffect, useState } from 'react'
import './Home.css'
import homeImg from '../../assets/images/homeBack.png'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const delay = 6;

  const nameArray = ['', 'H', 'a', 's', 's', 'a', 'n', '', 'A', 'l', 'y']
  const jobArray = ['f', 'r', 'o', 'n', 't', 'e', 'n', 'd', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

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
      <div className='home'>
        <div className="homeTxt">
          <p>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={26}
            />
          </p>
        </div>
        <div className="homeImg">
          <img src={homeImg} alt='Home' />
        </div>
      </div>
    </>
  )
}

export default Home