import imgTrip from "../assets/Image source 2.png";
import Collapse from "../components/Collapse";

function About() {
    return (
        <div className="about-container">
            

                    <div className="about-img" >
                            <img src={imgTrip} alt="img-trip" ></img>            
                    </div>

                    <div className="collapse-life">
                            <Collapse />
                    </div>

        </div>

        
    );
}

export default About 