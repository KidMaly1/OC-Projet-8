import Logo from './assets/LOGO.png'

function Banner() {
    return (
        <div className="home-banner">
            <img className="logo-img" src={Logo} alt="Kasa Logo"></img>

            <nav>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">A propos</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Banner
