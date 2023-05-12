import React from 'react'
import './Nav.css'
 import { useEffect, useState } from 'react'
function Nav() {

const[show,setShow]=useState(false)
useEffect(() => {
  window.addEventListener("scroll",()=>{
   if (window.scrollY>500) {
    setShow(true)
   } else {
    setShow(false)
   }
  })
}, [])
console.log(show);
  return (
    <div className={`nav ${show&&"black_nav"}`}>
     <img className='nav_img' style={{width:'200px'}} alt='logo' src='https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png'/>
    </div>
  )
}

export default Nav