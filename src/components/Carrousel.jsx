import { useState } from "react";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";

function Carrousel ( images ){
    
    const [currentImage, setImage] = useState(0);
    const nbSlides = images.length;
    
        return (
            
        
            <div className="slider">
                

                <div className="house-img" >
                    <img className="carrousel-img" src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="house image" ></img>
                    <img className="arrow-left" src={arrowLeft} ></img>
                    <img className="arrow-right" src={arrowRight} ></img>
                </div>

            </div>

            
        )
    }
 

export default Carrousel