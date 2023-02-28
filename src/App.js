
import About from './components/about/about';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Portfolio from './components/portfolio/portfolio';
import Skill from './components/skills/skill';

import './App.css';

import { FaArrowCircleUp } from 'react-icons/fa'
import { useEffect, useState } from 'react';

function App() {
  const [showBtn , setShowBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        setShowBtn(true)
      }else{
        setShowBtn(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      
      {showBtn && <FaArrowCircleUp onClick={scrollUp} className='scrollBtn'/>}
    </div>
  );
}

export default App;

