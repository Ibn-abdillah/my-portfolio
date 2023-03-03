import React from 'react'
import estate from '../../assets/estate.png'
import exe from '../../assets/exe.png'
import ecommerce from '../../assets/ecommerce.png'
import crypto from '../../assets/crypto.png'
import barber from '../../assets/barber.png'
import card from '../../assets/card.png'
import interior from '../../assets/interior.png'
import netflix from '../../assets/netflix.png'
import twitter from '../../assets/twitter.png'
import show from '../../assets/show.png'
import form from '../../assets/form.png'
import gallery from '../../assets/gallery.png'
import editor from '../../assets/editor.png'
import load from '../../assets/load.png'
import clock from '../../assets/clock.png'
import weather from '../../assets/weather.png'
import coins from '../../assets/coins.png'

import './portfolio.css'

function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h2><span>My</span> Portfolio</h2>
      <div className="content">
      <h3 className='mobile'>Built with React JS 👇</h3>
      <div className="project">
          <img src={crypto} alt="" />
          <h3>Trading App</h3>
          <p>with React, react-icons, fetching the featured page contents 
             with CoinGecko api.</p>
          <div className="project-btn">
            <button><a href="https://trading-apps.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/trading-app">Source</a></button>
          </div>
        </div>
        
        <div className="project">
          <img src={estate} alt="" />
          <h3>Real Estate Design</h3>
          <p>with React, react-icons, custom css, css grid layout.</p>
          <div className="project-btn">
            <button><a href="https://react-grid-layout.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/react-grid-layout">Source</a></button>
          </div>
        </div>
             
        <div className="project">
          <img src={coins} alt="" />
          <h3>Coins List</h3>
          <p>with React, crypto api and custom css</p>
          <div className="project-btn">
            <button><a href="https://coins-pricelist.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/Trading-website">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={exe} alt="" />
          <h3>React website Design</h3>
          <p>with React, react-icons, custom css.</p>
          <div className="project-btn">
            <button><a href="https://a-react-website.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/A-react-website">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={weather} alt="" />
          <h3>Weather App</h3>
          <p>with React, openweathermap api, custom css.</p>
          <div className="project-btn">
            <button><a href="https://weatherfetchapi.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/weather-app">Source</a></button>
          </div>
        </div>

        <h3 className='mobile'>Built with HTML5, CSS3 and JS 👇</h3>

        <div className="project">
          <img src={ecommerce} alt="" />
          <h3>E-commerce website</h3>
          <p>with HTML5, CSS3, Javascript</p>
          <div className="project-btn">
            <button><a href="https://e-commerce-website-one.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/E-commerce-website">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={barber} alt="" />
          <h3>Barber website</h3>
          <p>with HTML5, CSS3, Javascript</p>
          <div className="project-btn">
            <button><a href="https://barbershop-website1.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/Barber-Shop-Website">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={netflix} alt="" />
          <h3>Netflix clone website</h3>
          <p>with HTML5 and CSS3</p>
          <div className="project-btn">
            <button><a href="https://netflix-clone-pro.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/Netflix-clone-project">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={interior} alt="" />
          <h3>Interior Design website</h3>
          <p>with HTML5, CSS3, Javascript</p>
          <div className="project-btn">
            <button><a href="https://interior-website-project.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/Interior-Website">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={gallery} alt="" />
          <h3>Image Gallery</h3>
          <p>with HTML5, CSS3 and Javascript</p>
          <div className="project-btn">
            <button><a href="https://image-gallery-pro.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/Image-Gallery">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={card} alt="" />
          <h3>Credit Card design</h3>
          <p>with HTML5 and CSS3</p>
          <div className="project-btn">
            <button><a href="https://creditcard-1.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/Virtual-Card">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={editor} alt="" />
          <h3>Code Editor</h3>
          <p>with HTML5, CSS3 and Javascript</p>
          <div className="project-btn">
            <button><a href="https://codeeditor-1.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/Code-Editor-App">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={clock} alt="" />
          <h3>Analog Clock</h3>
          <p>with HTML5, CSS3 and Javascript</p>
          <div className="project-btn">
            <button><a href="https://analog-clock-1.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/Analog-clock">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={load} alt="" />
          <h3>Loading bar</h3>
          <p>with HTML5, CSS3 and Javascript</p>
          <div className="project-btn">
            <button><a href="https://loading-bar-1.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/Loading-bar">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={twitter} alt="" />
          <h3>Twitter Signup Page</h3>
          <p>with HTML5 and CSS3</p>
          <div className="project-btn">
            <button><a href="https://twitter-signin-page.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/Twitter-SignIn-page">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={form} alt="" />
          <h3>signup and signin form</h3>
          <p>with HTML5, CSS3 and Javascript</p>
          <div className="project-btn">
            <button><a href="https://form-001.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/Login-Form">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={show} alt="" />
          <h3>Toggle Password</h3>
          <p>with HTML5, CSS3 and Javascript</p>
          <div className="project-btn">
            <button><a href="https://showpassword-1.netlify.app/">View</a></button>
            <button><a href="https://github.com/Ibn-abdillah/Toggle-password">Source</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio