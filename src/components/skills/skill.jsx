import React from 'react'
import html from '../../assets/html.png'
import css from '../../assets/css3.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import rtk from '../../assets/rtk.png'
import mui from '../../assets/mui.png'
import './skill.css';

function Skill() {
  return (
    <div className='skill' id='skill'>
      <h2>My <span>Skills</span></h2>
      <div className="content">
        <div className="items">
        <img src={html} alt="" />
        <h4>HTML5</h4>
        </div>
        
        <div className="items">
        <img src={css} alt="" />
        <h4>CSS3</h4>
        </div>

        <div className="items">
        <img src={js} alt="" />
        <h4>Javascript</h4>
        </div>

        <div className="items">
        <img src={react} alt="" />
        <h4>React js</h4>
        </div>
        
        <div className="items">
        <img src={rtk} alt="" />
        <h4>R/Toolkit</h4>
        </div>

        <div className="items">
        <img src={mui} alt="" />
        <h4>MUI</h4>
        </div>

      </div>
    </div>
  )
}

export default Skill