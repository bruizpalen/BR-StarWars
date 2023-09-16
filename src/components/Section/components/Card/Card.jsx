import { Link } from "react-router-dom";
import classes from "./Card.module.css"; // Import your CSS module for styling

const Card = ({ name, gender, hairColor, eyeColor }) => {
  return (
    <div className={`card m-3 ${classes.card}`}>
      {" "}
      {/* Apply the CSS class for styling */}
      <img
        src="https://placehold.co/600x400"
        className="card-img-top"
        alt="placeholder"
      />
      <h2 className="card-text m-3">{name}</h2>
      <div className={`m-3 d-flex flex-column ${classes.cardBody}`}>
        {" "}
        {/* Apply the CSS class for styling */}
        <p>Gender: {gender}</p>
        <p>Hair color: {hairColor}</p>
        <p>Eye-color: {eyeColor}</p>
      </div>
      <div className="d-flex card-body justify-content-between">
        <Link to="/detail">
          <button className="btn btn-primary">More details!</button>
        </Link>
        <button className="btn btn-secondary">
          <i className="fa-solid fa-heart" />
        </button>
      </div>
    </div>
  );
};

export default Card;
