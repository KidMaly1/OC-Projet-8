import { useState } from "react";

function Collapse () {

    const [collapseOpen1, setCollapseOpen1] = useState(false);
    const [collapseOpen2, setCollapseOpen2] = useState(false);
    const [collapseOpen3, setCollapseOpen3] = useState(false);
    const [collapseOpen4, setCollapseOpen4] = useState(false);

    let text1, text2, text3, text4;

/* First Collapse */
if (collapseOpen1) {
    text1 = (
        <div className="collapse-content">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes 
                les informations sont régulièrement vérifiées par nos équipes.
            </p>
        </div>
    )
}
else {
    text1 = null;
}

/* Second Collapse */
if (collapseOpen2) {
    text2 = (
        <div className="collapse-content">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
            </p>
        </div>
    )
}
else {
    text2 = null;
}

/* Third Collapse */
if (collapseOpen3) {
    text3 = (
        <div className="collapse-content">
            <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit
                avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
            </p>
        </div>
    )
}
else {
    text3 = null;
}

/* Fourth Collapse */
if (collapseOpen4) {
    text4 = (
        <div className="collapse-content">
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux 
                critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à
                nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour 
                nos hôtes.
            </p>
        </div>
    )
}
else {
    text4 = null;
}



return (
    <div className="collapse-container">
        

                <div className="collapse">
                    <button onClick={() => setCollapseOpen1(!collapseOpen1)} className="collapse-toggle">Fiabilité</button>
                    {text1}
                </div>

                <div className="collapse">
                    <button onClick={() => setCollapseOpen2(!collapseOpen2)} className="collapse-toggle">Respect</button>
                    {text2}
                </div>

                <div className="collapse">
                    <button onClick={() => setCollapseOpen3(!collapseOpen3)} className="collapse-toggle">Service</button>
                    {text3}
                </div>

                <div className="collapse">
                    <button onClick={() => setCollapseOpen4(!collapseOpen4)} className="collapse-toggle">Sécurité</button>
                    {text4}
                </div>


        </div>
)

}

export default Collapse