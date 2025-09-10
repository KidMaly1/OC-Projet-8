import '../components/Ratings.css';

function Ratings({ score }) {
  const maxStars = 5;

  return (
    <div className="rating-container">
      {[...Array(maxStars)].map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          fill={index < score ? "#ff6060" : "#e3e3e3"}
          width="20px"
          height="20px"
          className="star"
        >
          <polygon points="10,1 12.5,7 19,7 13.5,11.5 15.5,18 10,14 4.5,18 6.5,11.5 1,7 7.5,7" />
        </svg>
      ))}
    </div>
  );
}

export default Ratings