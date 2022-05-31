import React, {useEffect, useState} from 'react'
import NavMobile from './navMobile'
import NavPC from './navPC'
import './Navstyle.css'
function GeneralNav() {
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
    <>{!(windowDimenion.winWidth > 1000) ? <NavMobile/> : <NavPC/>}
    
    </>
  )
}

export default GeneralNav