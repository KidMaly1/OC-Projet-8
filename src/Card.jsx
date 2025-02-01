import Picture from './assets/Walt-Disney-embleme.jpg'

function Card() {
    return (
        <div className="card">
            <img className="card-img" src={Picture} alt="Card picture"></img>
            <h2>Hello 🏝️</h2>
            <p>React lesson</p>
        </div>
    );
}

export default Card