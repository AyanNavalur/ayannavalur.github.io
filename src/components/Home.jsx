import React, { useState, useEffect } from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(400);

    const textArray = ['Data Engineer', 'Software Engineer', 'Data Analyst'];
    const switchSpeed = 400;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, typingSpeed)

        return () => clearInterval(ticker);
    }, [text])

    const tick = () => {
        let i = loopNum % textArray.length;
        let fullText = textArray[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
              currentDate = Date.now();
            } while (currentDate - date < milliseconds);
        }
        
        // adds delay of 1 second after full text is typed
        if (text === fullText) {
            sleep(1000);
        }

        if (isDeleting) {
            setTypingSpeed(prevSpeed => prevSpeed - 15);
        }

        if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setTypingSpeed(switchSpeed);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(switchSpeed);
        }
    }

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ayan Navalur</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a {text}.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a data engineer based in the NY/NJ area, specializing in building (and occasionally
                designing) applications, data pipelines, and everything in between.</p>
            <div>
                {/* Smooth Scrolling */}
                <Link to="work" smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                            View Work 
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home