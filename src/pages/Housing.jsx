import { useParams } from 'react-router';
import ErrorPage from './Errorpage';
import Datas from '../../appartements.json';
import Carrousel from '../components/Carrousel';
import Tags from '../components/Tags';
import Ratings from '../components/Ratings';
import Dropdown from '../components/Dropdown';
import '../pages/Housing.css';


function Housing() {

    const { id } = useParams();
    const logement = Datas.find((item) => item.id === id);

    if (!logement) {
        return <ErrorPage />
    }

    return (

        <div className="housing-content">

            <div className="house" >


                    <div className="house-slider">
                        <Carrousel pictures={logement.pictures} />
                    </div>

            </div>


            <div className="house-idk" >

                <div className="house-alo" >

                        <div className="house-info">

                                <div className="title-and-location">
                                    <h1>{logement.title}</h1>
                                    <p>{logement.location}</p>      
                                </div>


                                <div className="tags-ratings">

                                        <Tags alohaTags={logement.tags} />
                                
                                </div>

                                
                        </div>

                               <div className="host-info-and-ratings">

                                        <div className="host-info">
                                                <p className="host-name">{logement.host.name}</p>
                                                <img className="host-picture" src={logement.host.picture} alt="Host Picture" ></img>
                                        </div>
                                        
                                        <Ratings score={parseInt(logement.rating)} />

                                </div>  

                </div>
    

                        <div className="dropdown-idk">
                                <Dropdown title="Description" content={logement.description} />
                                <Dropdown title="Équipements" content={logement.equipments} />
                        </div>
                        


                    </div>


            </div>

        
        
    )
}

export default Housing