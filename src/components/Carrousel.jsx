import { useState } from "react";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";
import '../components/Carrousel.css';

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
      

      let imageIndexDisplay;

            if (pictures.length > 1) {
            imageIndexDisplay = (
                <p className="img-index">
                {currentIndex + 1} / {pictures.length}
                </p>
            );
            } else {
            imageIndexDisplay = null;
            }

            
      let arrowDisplay;

            if (pictures.length > 1) {
            arrowDisplay = ( <> 
                <img className="arrow-left" src={arrowLeft} onClick={goToPrevious} alt="Précédente" />
                <img className="arrow-right" src={arrowRight} onClick={goToNext} alt="Suivante" />
            </>);
        } else {
            arrowDisplay = null;
        }
        


        return (
            

            <div className="slider">
                
                <div className="house-img" >

                    {/* Image actuelle affichée */}
                <img src={pictures[currentIndex]} alt={`Logement ${currentIndex + 1}`} className="carrousel-img" />

                    {/* Flèches */}
                    
                    {arrowDisplay}
                    
                    {/*Numérotation*/}
                    {imageIndexDisplay}
                </div>

            </div>

            
        )
    }
 

export default Carrousel