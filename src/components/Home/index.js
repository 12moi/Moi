
import LogoTitle from '../../assets/images/logo-s.png'

const Home =()=> {

    return(
        <div className="container home-page">
         <div className="text-zone">
            <h1>Hi,  <br/> I'm
            <img src={LogoTitle} alt=" developer" />
            Slobodan
            <br/>
            Web developer
            </h1>
            <h2> Frontend Developer / FullStack Developer</h2>

            <link to="/container" className="flat-button">CONTACT ME</link>
         </div>
        </div>
    )

    
}

export default Home