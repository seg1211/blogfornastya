import React, {useRef} from 'react'
import Background from '../video/back.mp4'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {Land, Vidos, Flex_col, Container, GButton, TomatoButton} from '../globablStyles'
function Landing() {
    const videoRef= useRef();
    const setPlayBack = () => {
      videoRef.current.playbackRate = 0.9;
    };
    const variants = {
        animate: {
            opacity: 1,
            y:0,
            transition: {duration: 0.5}
        },
        initial: {
            opacity: 0,
            y:'-2.5vh',
        },
        exit: {
            opacity: 0,
            y:'-2.5vh',
            transition: {duration: 1}
        }
    }
  return (
      <motion.div exitbeforeenter
      variants={variants}
      animate='animate'
      initial='initial'
      exit='exit'>
        <Land>
        <Vidos className='hero_video' autoPlay muted loop ref={videoRef}
        onCanPlay={() => setPlayBack()}>
        <source src={Background} type="video/mp4"></source>
        </Vidos>
        </Land>
        <Container>
        <Flex_col>
            <h2>
                Welcome to my blog!
            </h2>
            <p>
                Click to find out more.
            </p>
            <div>
                <Link to='/blog'>
                <TomatoButton>
                    My blog
                </TomatoButton>
                </Link>
                {/* <GButton>
                    My projects
                </GButton> */}
            </div>
        </Flex_col>
        </Container>
    </motion.div>
  )
}

export default Landing