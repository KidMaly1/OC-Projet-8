import LogoKasa from '../assets/LOGO.png';
import { NavLink } from "react-router";
import '../components/Banner.css';

function Banner() {
    return (
        <div className="home-banner">

                <NavLink to="/">
                    <img className="logo-img" src={LogoKasa} alt="Kasa Logo"></img>
                </NavLink>
                
                    <nav>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                            Accueil
                        </NavLink>

                        <NavLink to="/About" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                            A propos
                        </NavLink>
                    </nav>

        </div>
                
    )
}

export default Banner
