import React from 'react'
import dev from '../../assets/ibn1.png'
import './about.css'

import { HiDownload } from 'react-icons/hi'

function About() {
  
    const onButtonClick = () => {
      fetch('AkinolaCV.pdf').then(response => {
          response.blob().then(blob => {

              const fileURL = window.URL.createObjectURL(blob);
            
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'AkinolaCV.pdf';
              alink.click();
          })
      })
  }
  
  return (
    <div className='about' id='about'>
        <h2><span>About</span> Me</h2>

        <div className='content'>
            <div className="col-1">
                <img src={dev} alt="" />
            </div>

            <div className="col-2">
             <h3>Who <span>Am</span> I ?</h3>
             <p> I'm Akinola Sheriff , a frontend developer, I create responsive 
                secure websites and I take my work as a Web Developer seriously and this means 
                I always ensure my skills are kept up to date and also I'm seeking a 
                frontend role opportunities where I can impact my skills for the success of
                an organization / industry. If you hire me as your Web Developer,
                I assure you I will fit into your team quickly.
                </p>
                <button onClick={onButtonClick}>Download CV<HiDownload className='icon' /></button>
            </div>
        </div>
    </div>
  )
}

export default About