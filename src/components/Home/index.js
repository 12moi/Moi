
// import { link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
const Home =()=> {

    return(
        <div className="container home-page">
         <div className="text-zone">
            <h1>Hi,  <br/> I'm  Moi
            <img src={LogoTitle} alt=" developer" />
            hadrack
            <br/>
            Web developer
            </h1>
            <h2> Frontend Developer / FullStack Developer</h2>
            <button to="/container" className="flat-button" >CONTACT ME</button>
            
         </div>
        </div>
    )

    
}

export default Home