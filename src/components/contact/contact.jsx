
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import { BsTelephone } from 'react-icons/bs'
import { BiCopyright } from 'react-icons/bi'
import { MdAlternateEmail } from 'react-icons/md'
import { FaTwitter } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'
import { BsFacebook, BsWhatsapp, BsGithub } from 'react-icons/bs'

import './contact.css'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qx1qv9w', 'template_m2vaauw', form.current, '7XS64qNhR4IkmySva')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className='contact' id='contact'>
      <h2>Contact <span>Me</span></h2>
      <div className="content">
        <div className="col-1">
            <h3><span>Hire</span> Me</h3>
            <p>
              I'm ready for full-time job or if you have any project in your mind. 
              I'm ready to create very nice interface and responsive design for 
              companies all around the world.
            </p>

            <div className='telephone'>
                <BsTelephone/>
                <span>+2347082216020</span>
            </div>

            <div className='email'>
                <MdAlternateEmail/>
                <span>akinolasheriff2022@gmail.com</span>
            </div>

            <p>Looking forward to hear from you 😍❤</p>

            <div className="socials">
                <a 
                  href="https://www.facebook.com/profile.php?id=100072794794720">
                  <BsFacebook className='icon' />
                </a>

                <a 
                  href="https://Wa.me/2347082216020">
                  <BsWhatsapp className='icon' />
                </a>

                <a 
                  href="https://twitter.com/akinolasheriff7">
                  <FaTwitter className='icon' />
                </a>

                <a 
                  href="https://github.com/Ibn-Abdillah">
                  <BsGithub className='icon' />
                </a>
            </div>
          </div>
          

        <div className="col-2">
          <form action="" ref={form} onSubmit={sendEmail}>

           <div className="input-field">
                <input 
                type="text" 
                name="user_name" 
                required 
                placeholder = 'Your Name' />
            </div>

            <div className="input-field">
                <input 
                type="email" 
                name="user_email" 
                required 
                placeholder = 'Your Email Address' />
            </div>

            <div className="input-field">
                <input 
                type="number" 
                name="user_contact" 
                required 
                placeholder = 'Your Phone Number' />
            </div>

            <div className="input-field">
                <textarea  cols="30" rows="10" 
                name="user_msg" 
                required 
                placeholder = 'Your Message'>
                </textarea>
            </div>

            <button 
              type='submit'
              className='msg-btn'>
              Send Message 
              <AiFillMessage 
              className='msg-icon'/>
            </button>
          </form>
        </div>
      </div>

      <div className="copyright">
        <p>
          Designed by Ibn-Abdillah
        </p> 
        <BiCopyright/>
      </div>
    </div>
  )
}

export default Contact