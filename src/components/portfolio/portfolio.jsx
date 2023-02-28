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

import './portfolio.css'

function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h2><span>My</span> Portfolio</h2>
      <div className="content">
      <div className="project">
          <img src={crypto} alt="" />
          <h3>Crypto example Design</h3>
          <p>with React, react-icons, fetching the featured page contents 
             with CoinGecko api.</p>
          <div className="project-btn">
            <button><a href="https://crypto-example.netlify.app/">View</a></button>
            <button><a href="#">Source</a></button>
          </div>
        </div>
        
        <div className="project">
          <img src={estate} alt="" />
          <h3>Real Estate Design</h3>
          <p>with React, react-icons, custom css, css grid layout.</p>
          <div className="project-btn">
            <button><a href="https://react-grid-layout.netlify.app/">View</a></button>
            <button><a href="#">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={exe} alt="" />
          <h3>React website Design</h3>
          <p>with React, react-icons, custom css.</p>
          <div className="project-btn">
            <button><a href="https://a-react-website.netlify.app/">View</a></button>
            <button><a href="#">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={ecommerce} alt="" />
          <h3>E-commerce website</h3>
          <p>with HTML5, CSS3, Javascript</p>
          <div className="project-btn">
            <button><a href="https://e-commerce-website-one.netlify.app/">View</a></button>
            <button><a href="#">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={barber} alt="" />
          <h3>Barber website</h3>
          <p>with HTML5, CSS3, Javascript</p>
          <div className="project-btn">
            <button><a href="https://barbershop-website1.netlify.app/">View</a></button>
            <button><a href="#">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={netflix} alt="" />
          <h3>Netflix clone website</h3>
          <p>with HTML5 and CSS3</p>
          <div className="project-btn">
            <button><a href="https://netflix-clone-pro.netlify.app/">View</a></button>
            <button><a href="#">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={interior} alt="" />
          <h3>Interior Design website</h3>
          <p>with HTML5, CSS3, Javascript</p>
          <div className="project-btn">
            <button><a href="https://interior-website-project.netlify.app/">View</a></button>
            <button><a href="#">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={gallery} alt="" />
          <h3>Image Gallery</h3>
          <p>with HTML5, CSS3 and Javascript</p>
          <div className="project-btn">
            <button><a href="https://image-gallery-pro.netlify.app/">View</a></button>
            <button><a href="#">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={card} alt="" />
          <h3>Credit Card design</h3>
          <p>with HTML5 and CSS3</p>
          <div className="project-btn">
            <button><a href="https://creditcard-1.netlify.app/">View</a></button>
            <button><a href="#">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={editor} alt="" />
          <h3>Code Editor</h3>
          <p>with HTML5, CSS3 and Javascript</p>
          <div className="project-btn">
            <button><a href="https://codeeditor-1.netlify.app/">View</a></button>
            <button><a href="#">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={twitter} alt="" />
          <h3>Twitter Signup Page</h3>
          <p>with HTML5 and CSS3</p>
          <div className="project-btn">
            <button><a href="https://twitter-signin-page.netlify.app/">View</a></button>
            <button><a href="#">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={form} alt="" />
          <h3>signup and signin form</h3>
          <p>with HTML5, CSS3 and Javascript</p>
          <div className="project-btn">
            <button><a href="https://form-001.netlify.app/">View</a></button>
            <button><a href="#">Source</a></button>
          </div>
        </div>

        <div className="project">
          <img src={show} alt="" />
          <h3>Toggle Password</h3>
          <p>with HTML5, CSS3 and Javascript</p>
          <div className="project-btn">
            <button><a href="https://showpassword-1.netlify.app/">View</a></button>
            <button><a href="#">Source</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio