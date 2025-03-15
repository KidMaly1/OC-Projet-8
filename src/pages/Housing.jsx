import { useParams } from 'react-router';
import ErrorPage from './Errorpage';
import Datas from '../../appartements.json';


function Housing() {

    const { id } = useParams();
    const logement = Datas.find((item) => item.id === id);

    if (!logement) {
        return <ErrorPage />
    }

    return (

        <div className="house" >

                <div className="house-img" >
                    <img className="carrousel-img" src={logement.cover} alt="house image" ></img>
                </div>

                    <h1>{logement.title}</h1>
                    <p>Ile de France - Paris 17e</p>

        </div>
        
    )
}

export default Housing