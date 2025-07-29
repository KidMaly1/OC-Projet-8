import { useParams } from 'react-router';
import ErrorPage from './Errorpage';
import Datas from '../../appartements.json';
import Carrousel from '../components/Carrousel';
import Tags from '../components/Tags';


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



            <div className="house-info">

                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
        
            </div>

            <Tags alohaTags={logement.tags} />


        {/*}
              <div className="tag-container">
                {Datas.map((tags) => <Tags alohaTags={tags}/> )}
                
            </div> */}

        </div>
        
        
    )
}

export default Housing