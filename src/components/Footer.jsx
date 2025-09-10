import FooterImg from '../assets/D_Footer.png';
import '../components/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <img className="footer-img" src={FooterImg} alt="Footer image" ></img>
        </div>
    )
}

export default Footer