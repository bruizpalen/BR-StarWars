import { Link } from "react-router-dom";
import classes from "./Card.module.css"; // Import your CSS module for styling
import babyYoda from "../../../../assets/baby_yoda.jpg";
import planet from "../../../../assets/planet.jpg";
import vehicle from "../../../../assets/satelite.jpg";
import useAppContext from "../../../../context/AppContext";

const Card = ({
  resourceType,
  name,
  gender,
  hairColor,
  eyeColor,
  uid,
  population,
  terrain,
  model,
  passengers,
}) => {
  const { actions } = useAppContext();
  return (
    <div className={`card m-3 ${classes.card}`}>
      {resourceType === "people" && (
        <>
          <div className={`${classes.imageContainer}`}>
            <img
              src={babyYoda}
              className={`${classes.card}`}
              alt="placeholder"
            />
          </div>
          <h2 className="card-text m-3">{name}</h2>
          <div className={`mt-3 mx-3 d-flex flex-column ${classes.cardBody}`}>
            <p>Gender: {gender}</p>
            <p>Hair color: {hairColor}</p>
            <p>Eye-color: {eyeColor}</p>
          </div>
        </>
      )}
      {resourceType === "planets" && (
        <>
          <div className={`${classes.imageContainer}`}>
            <img src={planet} className="card-img-top" alt="placeholder" />
          </div>
          <h2 className="card-text m-3">{name}</h2>
          <div className={`mt-3 mx-3 d-flex flex-column ${classes.cardBody}`}>
            <p>Population: {population}</p>
            <p>Terrain: {terrain}</p>
          </div>
        </>
      )}
      {resourceType === "vehicles" && (
        <>
          <div className={`${classes.imageContainer}`}>
            <img src={vehicle} className="card-img-top" alt="placeholder" />
          </div>
          <h2 className="card-text m-3">{name}</h2>
          <div className={`mt-3 mx-3 d-flex flex-column ${classes.cardBody}`}>
            <p>Model: {model}</p>
            <p>Passengers : {passengers}</p>
          </div>
        </>
      )}
      <div className="d-flex card-body justify-content-between">
        <Link to={`/${resourceType}/${uid}`}>
          <button className="btn btn-primary">More details!</button>
        </Link>
        <button
          className="btn btn-secondary"
          onClick={() => actions.addToFavorites({ name, uid })}
        >
          <i className="fa-solid fa-heart" />
        </button>
      </div>
    </div>
  );
};

export default Card;
