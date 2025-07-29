import { Link } from "react-router"

function Card({dataLogement}) {
    
    return (

        <Link to={`/Housing/${dataLogement.id}`} className="card-container">
            
            <div className="card">

                <p className="card-title" >{dataLogement.title}</p>

                        <div className="card-image">
                            <img className="cover-img" src={dataLogement.cover} alt="cover image" ></img>
                        </div>
                
            </div>

        </Link>
    );
}

export default Card

