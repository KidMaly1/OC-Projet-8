import { useState } from "react";

function Dropdown ({ title, content }) {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    let message1, message2;

    if (isOpen1) {

        message1 = (
                <div className="dropdown-content">
                    <p>{content}</p>
                </div>
                    )

                }
    else {
        message1 = null;
    }


    if (isOpen2) {

        message2 = (
                <div className="dropdown-content">
                    <ul>
                        <li>Wi-Fi</li>
                        <li>Machine à laver</li>
                        <li>Air conditionné</li>
                        <li>Cuisine équipée</li>
                    </ul>
                </div>
                    )
                }
    else {
        message2 = null;
    }
    

    return (

        // dropdownText.map((description) => //

        <div className="dropdown-container">

                <div className="dropdown">
                    <button onClick={() => setIsOpen1(!isOpen1)} className="dropdown-toggle">{title}</button>
                    {message1}
                </div>

                <div className="dropdown">
                    <button onClick={() => setIsOpen2(!isOpen2)} className="dropdown-toggle">Équipements</button>
                    {message2}
                </div>

        </div>
        
    
    )
}


export default Dropdown