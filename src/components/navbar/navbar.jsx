import React, { useState }  from "react"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import './navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const changeMenu = () => setClick(!click)
    const close = () => setClick(false)
  return (
    <div className="navbar">
         <nav>
            <h1 className='logo'>Ibn-<span>Abdillah</span></h1>
            <ul className={click ?  'nav-menu active' : 'nav-menu'}>
            <li><a href="#home" onClick={close}><span>Home</span></a></li>
            <li><a href="#about" onClick={close}>About Me</a></li>
            <li><a href="#skill" onClick={close}>Skills</a></li>
            <li><a href="#portfolio" onClick={close}>Portfolio</a></li>
            <li><a href="#contact" onClick={close}>Contact Me</a></li>
         </ul>

         <div className='hamburger' onClick={changeMenu}>
            {click ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </nav>
    </div>
  )
}

export default Navbar