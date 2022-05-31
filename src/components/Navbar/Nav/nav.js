import NavData from '../data/dataNav'
import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
import './Navstyle.css'
const variants = {
  animate: {
    opacity: 1,
    y:'2.5vh'
  },
  animate2: {
    opacity: 1,
    x:'4vw',
    y:'10vh',
  },
  initial: {
      opacity: 0,
      y:'0vh',
      x:'-10vw'
  },
  initial2: {
    opacity: 0,
    y:'10vh',
    x:'-10vw'
},
  exit: {
      opacity: 0,
      y:'-100vh',
      transition: {duration: 2}
  },
  exit2: {
    opacity: 0,
    x:'-150vh',
    transition: {duration: 1.5}
}
}
function Nav(props) {
            /////////////////////////
        const [windowDimenion, setWindowDimenion] = useState({
            winWidth: window.innerWidth
          })
          const detectSize = () => {
            setWindowDimenion({
              winWidth: window.innerWidth,
            })
          }
          useEffect(() => {
            window.addEventListener('resize', detectSize)
        
            return () => {
              window.removeEventListener('resize', detectSize)
            }
          }, [windowDimenion])
        ////////////////////////
  return (
      <>
      
        {NavData.map((x)=>(
            <motion.li key={x.text}
            onClick={props.onClick}
            variants={variants}
            animate= {(windowDimenion.winWidth > 1000) ?'animate' : 'animate2'}
            transition={{delay:x.number/2, duration: 0.5, type: '...'}}
            initial={(windowDimenion.winWidth > 1000) ?'initial' : 'initial2'}
            exit={(windowDimenion.winWidth > 1000) ?'exit' : 'exit2'}>
              <Link to={x.to} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                {x.text}</Link>
            </motion.li>
            
        ))}
        </>
  )
}

export default Nav