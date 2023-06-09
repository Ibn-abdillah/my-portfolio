import React from 'react'
import estate from '../../assets/estate.png'
import exe from '../../assets/exe.png'
import crypto from '../../assets/crypto.png'
import weather from '../../assets/weather.png'
import coins from '../../assets/coins.png'

import './portfolio.css'

function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h2><span>My</span> Portfolio</h2>
      <div className="content">

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
            <button><a href="https://multipage-trading-app.netlify.app/">View</a></button>
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
      </div>
    </div>
  )
}

export default Portfolio