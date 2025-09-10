import { useState } from "react";
import arrowUp from "../assets/arrow_up.png";

function Dropdown({ title, content }) {

  const [isOpen, setIsOpen] = useState(false);

    let message;

        if (isOpen) {
            if (Array.isArray(content)) {

            message = (
                <div className="dropdown-content">
                    <ul>
                        {content.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            );
            } else {
            message = (
                <div className="dropdown-content">
                    <p>{content}</p>
                </div>
            );
            }
        }


        let arrowClass = "dropdown-arrow";

        if(isOpen) {
            arrowClass += " open";
        } else {
            arrowClass += " closed";
        }


  return (

        <div className="dropdown">

        <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span className="dropdown-title" >{title}</span>
            <img className={arrowClass} src={arrowUp} alt="Dropdown Arrow" ></img>
        </button>
        {message}
        </div>
        );
        
}

export default Dropdown;