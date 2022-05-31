import React from 'react'
import Nav from './nav'
import { AnimatePresence, motion } from 'framer-motion'
import { useState,useEffect } from 'react'
import {HiMenuAlt1} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'
import './Navstyle.css'
const variants = {
    animate: {
        opacity: 1,
        x:0,
        y:0,
        transition: {delay: 1, duration: 0.5, type:'tween'}
    },
    initial: {
        opacity: 0,
        x:'-10vw',
    },
    exit: {
        opacity: 0,
        x:'-10vw',
        transition: { duration: 0.5}
    }
}
const NavMobile = () => {
 
//   const [show, setShow]=useState(true)
//   const controlNavbar = () => {
//       if (    window.scrollY > 50) {
//           setShow(false)
//       }else {
//               setShow(true)
//           }
      
//   }
//   useEffect(() =>{
//       window.addEventListener('scroll', controlNavbar)
//       return () => {
//           window.removeEventListener('scroll', controlNavbar)
//       }
//   }, [])

const [hiding, setHiding] = useState(false)
function Hide () {
    setHiding(!hiding)
    }
    
    ////////////////
    {hiding ? (document.body.style['overflow'] = 'hidden') : (document.body.style['overflow'] = 'visible')}
  return ( <>
  <div className='mobile-main'>
  <AnimatePresence>
          {!hiding && <motion.div className='Nav-phone-beforeExit'
                     variants={variants}
                     animate='animate'
                     initial='initial'
                     exit={{
                      opacity: 0,
                      y:'-10vw',
                      transition: { duration: 0.5}
                  }}>
          <HiMenuAlt1 onClick={Hide} className ='Nav-phone-button'/>
          <h2>My blog</h2>
          </motion.div> }
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
          {hiding &&
           <motion.ul
           variants={variants}
           animate='animate'
           initial={{x:0,
            y:0,}}
           exit='exit'
           className='mobile'>
             <Nav
             onClick={Hide}/>
           </motion.ul>
           }
           </AnimatePresence>
           <AnimatePresence exitBeforeEnter>
          {hiding &&
           <MdOutlineClose
           variants={variants}
           animate='animate'
           initial='initial'
           exit='exit'
           className='mobile-button'
           onClick={Hide}/>
           }
           </AnimatePresence>
</div>
{hiding && <div className='back' onClick={Hide}></div>}
           </>
  )
}

export default NavMobile