import { Link } from "react-router";
import '../components/Card.css';

function Card({dataLogement}) {
    
    return (

        <Link to={`/Housing/${dataLogement.id}`} className="card-container">
            
            <div className="card">

                <div className="card-content">
                    <div className="card-overlay"></div>
                    <p className="card-title" >{dataLogement.title}</p>
                </div>

                        <div className="card-image">
                            <img className="cover-img" src={dataLogement.cover} alt="cover image" ></img>
                        </div>
                
            </div>

        </Link>
    );
}

export default Card

