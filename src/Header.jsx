import React from 'react'
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className='header'>
        <h1>Where in the world?</h1>
        <button 
          onClick={()=> {
            document.querySelector('body').classList.toggle("dark")
          }}
        
        ><IoMoonOutline/> <span>Dark Mode</span></button>
    </header>
  )
}

export default Header