import FooterImg from '../assets/D_Footer.png';
import '../components/Footer.css';
import LogoKasa2 from '../assets/LOGO2.png';

function Footer() {
    return (
        <div className="footer">
            <img className="logo-img-footer" src={LogoKasa2} alt="Kasa Logo Footer"></img>
            <p>© 2020 Kasa. All <span class="mobile-break"> rights reserved</span>
</p>
        </div>
    )
}

export default Footer