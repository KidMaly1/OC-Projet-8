import { useState } from "react";
import arrowUp from "../assets/arrow_up.png";
import '../components/Dropdown.css';

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const arrowClass = isOpen ? "dropdown-arrow open" : "dropdown-arrow closed";

  return (
    <div className="dropdown">

      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="dropdown-title">{title}</span>
          <img className={arrowClass} src={arrowUp} alt="Dropdown Arrow" />
      </button>

      {isOpen && (
        <div className="dropdown-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
      
    </div>
  );
}

export default Dropdown;
