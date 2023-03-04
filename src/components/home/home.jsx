import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import './home.css'
import dev from '../../assets/dev1.png'
import TypeWriterEffect from 'react-typewriter-effect';


function Home() {
  const text =
   <TypeWriterEffect
    startDelay={10}
    cursorColor="orangered"
    text={"Akinola Sheriff"}
    typeSpeed={70}
    textStyle = {{
      color: 'orangered'
    }}
    hideCursorAfterText = {true}
/>
  return (
    <div className='home' id='home'>
        <div className='content'>
            <div className='col-1'>
                <p><span>Hello</span> I'm</p>
                <h2>{text}</h2>
                <h3>A Frontend web developer.</h3>
                <button><BsWhatsapp className='btn-icon'/><a href="https://Wa.me/2347082216020">Let's Chat</a></button>
            </div>

            <div className='col-2'>
                <img src={dev}/>
            </div>
        </div>
    </div>
  )
}

export default Home
