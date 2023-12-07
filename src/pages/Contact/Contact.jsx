import { useState, useEffect } from 'react'
import './Contact.css'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'
import emailjs from '@emailjs/browser'
import { faLinkedin, faGithub, faSquareWhatsapp, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const delay = 3;

    const aboutArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']

    useEffect(
        () => {
            let timer1 = setTimeout(() => setLetterClass('text-animate-hover'), delay * 1000);

            return () => {
                clearTimeout(timer1);
            };
        },
        []
    );

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_1mdg3l9', 'template_0bb1wva', e.target, 'r7ENjw01v8K5fgCWP')
            .then((result) => {
                alert("Message Sent Successfully")
                window.location.reload(false)
            }, (error) => {
                alert("Failed to send the message, please try again")
                window.location.reload(false)
            });

        e.target.reset()
    }


    return (
        <>
            <div className='contact'>
                <h1 className="formHead">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={aboutArray}
                        idx={15}
                    />
                </h1>

                <div className="contactWrapper">

                    <form onSubmit={sendEmail} className="contactForm">
                        <input type='text' className='cFormInput' placeholder='Name' name='name' required />
                        <input type='email' className='cFormInput' placeholder='Email' name='email' required />
                        <input type='text' className='cFormInput' placeholder='Subject' name='subject' required />
                        <textarea placeholder='Your Message' name='message' required></textarea>

                        <button type='submit' className="cFormBtn">Send</button>
                    </form>


                    <div className="socialContact">
                        <div className="box1">
                            <div className="boxItem1">
                                <a href='https://www.linkedin.com/in/7assan3ly/' target='_blank'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <div className="boxItem2">
                                <a href='https://github.com/7assan3ly' target='_blank'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="boxItem3">
                                <a href='mailto:7assan3ly07@gmail.com' target='_blank'>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                            <div className="boxItem4">
                                <a href='https://api.whatsapp.com/send?phone=02001064583993' target='_blank'>
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Contact