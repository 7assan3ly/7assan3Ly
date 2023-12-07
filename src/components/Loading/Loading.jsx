import {useState, useEffect} from 'react'
import Loader from 'react-loaders';
import './Loading.scss'

const Loading = () => {
  
    const [loaderClass, setLoaderClass] = useState('loaderHolder')
    const delay = 2;

    useEffect(
        () => {
            let timer2 = setTimeout(() => setLoaderClass(''), delay * 1000);

            return () => {
                clearTimeout(timer2);
            };
        },
        []
    );


    return (
        <div className={loaderClass}>
            <Loader type="pacman" />
        </div>
    )

}

export default Loading