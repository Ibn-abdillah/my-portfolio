
import About from './components/about/about';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Portfolio from './components/portfolio/portfolio';
import Skill from './components/skills/skill';

import './App.css';

// Loading from it's component  
import Loading from './components/Loading';

import { FaArrowCircleUp } from 'react-icons/fa'
import { useEffect, useState } from 'react';

function App() {
  const [showBtn , setShowBtn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

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

    /// pre Loading effect
    useEffect(() =>{
      setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    },[]) 

  return (
    <div>
      { isLoading ? (
           <Loading />
           ) : (
        <div className="App">
          <Navbar />
          <Home />
          <About />
          <Skill />
          <Portfolio />
          <Contact />
      
         {showBtn && <FaArrowCircleUp onClick={scrollUp} className='scrollBtn'/>}
        </div> 
        )}
    </div>
  );
  // return (
  //   <div className="App">
  //     <Navbar />
  //     <Home />
  //     <About />
  //     <Skill />
  //     <Portfolio />
  //     <Contact />
      
  //     {showBtn && <FaArrowCircleUp onClick={scrollUp} className='scrollBtn'/>}
  //   </div>
  // );
}

export default App;

