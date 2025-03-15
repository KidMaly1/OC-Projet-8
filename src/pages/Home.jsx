import HomeImg from '../assets/IMG.png';
import Datas from '../../appartements.json';
import Card from '../components/Card';

function Home() {
    return (

        <div className="home-container" >

            <div className="home-img">
                <p className="home-text" >Chez vous, partout et ailleurs</p>
                <img className="background-img" src={HomeImg} alt="Home image" ></img>
            </div>
            

            <div className="home-cards">
                {Datas.map((logement) => <Card dataLogement={logement} />)}
            </div>
            
            
        </div>

        
                
    )
}

export default Home