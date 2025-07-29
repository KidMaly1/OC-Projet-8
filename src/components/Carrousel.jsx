import Datas from '../../appartements.json';
import { useState } from "react";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";

function Carrousel ({ pictures }){

    

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      // Fonction pour aller à l’image suivante
      const goToNext = () => {
        const isLast = currentIndex === pictures.length - 1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

        return (
            

            <div className="slider">
                
                <div className="house-img" >

                    {/* Image actuelle affichée */}
                <img src={pictures[currentIndex]} alt={`Logement ${currentIndex + 1}`} className="carrousel-img" />

                    {/* Flèches */}
                    
                    <img className="arrow-left" src={arrowLeft} onClick={goToPrevious} alt="Précédente"></img>
                    <img className="arrow-right" src={arrowRight} onClick={goToNext} alt="Suivante" ></img>
                    
                    <p className="img-index">{currentIndex + 1} / {pictures.length}</p>
                </div>

            </div>

            
        )
    }
 

export default Carrousel