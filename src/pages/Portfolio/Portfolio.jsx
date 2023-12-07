import './Portfolio.css'
import Port1 from '../../assets/images/port1.JPG'
import Port2 from '../../assets/images/port2.png'
import Port3 from '../../assets/images/port3.png'
import Port4 from '../../assets/images/port4.png'
import Port5 from '../../assets/images/port5.png'
import Port6 from '../../assets/images/port6.png'
import Port7 from '../../assets/images/port7.png'
import Port8 from '../../assets/images/port8.png'

const Portfolio = () => {
    return (
        <div className='portfolio'>
            {/* <div className="portRow1"> */}

                <div className="Port1">
                    <a href='https://github.com/7assan3ly/Corsatex' target='_blank'>
                        <div className='layer'/>
                    </a>
                </div>
                <div className="Port2">
                    <a href='https://7assan3ly.github.io/inStock-Store/' target='_blank'>
                        <div className='layer'/>
                    </a>
                </div>
                <div className="Port3">
                    <a href='https://fire-wheels.vercel.app/' target='_blank'>
                        <div className='layer'/>
                    </a>
                </div>
                <div className="Port4">
                    <a href='https://github.com/7assan3ly/Admin-Dashboard' target='_blank'>
                        <div className='layer'/>
                    </a>
                </div>
            {/* </div> */}


            {/* <div className="portRow2"> */}

                <div className="Port5">
                    <a href='https://github.com/7assan3ly/Sedia' target='_blank'>
                        <div className='layer'/>
                    </a>
                </div>
                <div className="Port6">
                    <a href='#'>
                        <div className='layer'/>
                    </a>
                </div>
                <div className="Port7">
                    <a href='https://blogic.vercel.app/' target='_blank'>
                        <div className='layer'/>
                    </a>
                </div>
                <div className="Port8">
                    <a href='https://7assan3ly.github.io/Gym-Exercises/' target='_blank'>
                        <div className='layer'/>
                    </a>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Portfolio