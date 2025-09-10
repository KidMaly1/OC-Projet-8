import imgTrip from "../assets/Image source 2.png";
import Collapse from "../components/Collapse";
import '../pages/About.css';

function About() {
    return (
        <div className="about-container">
            

                    <div className="about-img" >
                            <img src={imgTrip} alt="img-trip" ></img>            
                    </div>

                    <div className="collapses">
                            <Collapse />
                    </div>

        </div>

        
    );
}

export default About 