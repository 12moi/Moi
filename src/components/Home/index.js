
import { useEffect } from 'react'
import { useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
const Home =()=> {
   const [letterClass, setletterClass]=useState('text-animate')

   const nameArray=['h','a','d','r','a','c','k']
   const jobArray=['w','e','b','-','d','e','v','e','l','o','p','e','r']

   useEffect(()=>{
    return setTimeout(()=>{
        setletterClass('text-animate-hover')
    }, 4000)
   },
   [])
    return(
        <div className="container home-page">
         <div className="text-zone">
            <h1>
                
                <span className={`${letterClass}_12`}>Hi,</span>  
                <br/> 
                <span className={`${letterClass}_13`}>I</span> 
                <span className={`${letterClass}_14`}>'m</span> 
            <img src={LogoTitle} alt=" developer" />
           <AnimatedLetters letterClass={letterClass}
           strArray={nameArray}
           idx={22}/>
            <br/>
            <AnimatedLetters letterClass={letterClass}
           strArray={jobArray}
           idx={15}/>
            </h1>
            <h2> Frontend Developer / FullStack Developer</h2>
            <button to="/container" className="flat-button" >CONTACT ME</button>
            
         </div>
         <Logo />
        </div>
    )

    
}

export default Home