import { useState } from "react";
import '../components/Collapse.css';
import arrowUp from "../assets/arrow_up.png";

function Collapse2 () {
    const [collapseNewOpen, setCollapseNewOpen] = useState(false);

    const arrowClassNew = collapseNewOpen ? "dropdown-arrow open" : "dropdown-arrow closed" ;

    


    return (

        collapseNewOpen ? (
                    <div className="dropdown-practice">
                        <h1>Yo</h1>
        
                            <button onClick={() => setCollapseNewOpen(!collapseNewOpen)} className="collapse-toggle"><span>Aloha</span>
                                <img className={arrowClassNew} src={arrowUp} alt="Dropdown Arrow" ></img>
                            </button>
                            <p>Aloha Koa Tit 😎🏝️🌺</p>
                    </div>
        )
 
    : (
        <p>Nope</p>
    ) )
}

export default Collapse2
