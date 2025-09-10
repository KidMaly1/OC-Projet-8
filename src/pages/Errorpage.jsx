import ErrorImg from '../assets/404.png';
import { Link } from 'react-router';
import '../pages/Errorpage.css';

function ErrorPage() {
    return (

        <div className="error-page-container">
                <img className="error-page-img" src={ErrorImg} alt="404 image"></img>

                <div className="error-text">
                    <p className="text">Oups! La page que vous demandez n'existe pas.</p>
                    <Link to="/">Retourner sur la page d'accueil</Link>
                </div>
        </div>
    )
}

export default ErrorPage