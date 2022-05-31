import React, {useState, useEffect} from 'react'
import Nav from './nav'
import './Navstyle.css'
import { AnimatePresence, motion } from 'framer-motion'
const variants = {
    animate: {
        opacity: 1,
        y:0,
        transition: {duration: 0.5}
    },
    initial: {
        opacity: 0,
        y:'-10vh',
    },
    exit: {
        opacity: 0,
        y:'-100vh',
        transition: {duration: 2}
    }
}
///////////////
const variants2 = {
    animate: {
      opacity: 1,
      y:'2vh',
      transition: {duration: 1}
    },
    initial: {
        opacity: 0,
        y:'-10vh',
    },
    exit: {
        opacity: 0,
        y:'-100vh',
        transition: {duration: 2}
    },
  }
const NavPC = () => {
  const [show, setShow]=useState(true)
  const controlNavbar = () => {
      if (    window.scrollY > 400) {
          setShow(false)
      }else {
              setShow(true)
          }
      
  }
  console.log(window.scrollY)
  useEffect(() =>{
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])
    
  return ( <>
          <AnimatePresence exitBeforeEnter>
           {show && <div>
           <motion.ul
           variants={variants}
           animate='animate'
           initial='initial'
           exit='exit'
           className='PC'>
             <Nav/>
             <motion.h2
            variants={variants2}
            animate='animate'
            initial='initial'
            exit='exit'
            className='logo'>My blog</motion.h2>   
           </motion.ul>
           </div>}
           </AnimatePresence>
           </>
  )
}

export default NavPC