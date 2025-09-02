import LogoKasa from '../assets/LOGO.png'
import { Link } from "react-router"

function Banner() {
    return (
        <div className="home-banner">

                <Link to="/">
                    <img className="logo-img" src={LogoKasa} alt="Kasa Logo"></img>
                </Link>
                
                    <nav>
                        <Link to="/">Accueil</Link>
                        <Link to="/About">A propos</Link>
                    </nav>

        </div>
                
    )
}

export default Banner
