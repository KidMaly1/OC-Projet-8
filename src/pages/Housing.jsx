import { useState } from 'react';


function Housing(dataLogement) {

    const pictures = dataLogement.pictures;

    return (

        <div className="house" >

                <div className="house-img" >
                    <img className="carrousel-img" src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="house image" ></img>
                </div>

                    <h1>Appartement cozy</h1>
                    <p>Ile de France - Paris 17e</p>

        </div>
        
    )
}

export default Housing