import Card from "./components/Card";
import useAppContext from "../../context/AppContext";
import classes from "./Section.module.css";

const Section = ({ resource }) => {
  const { store } = useAppContext();
  const resourceData = store[resource]; // Use the provided resource prop
  const isLoading = store[`${resource}IsLoading`]; // Use the corresponding loading state

  if (isLoading) {
    return (
      <div className="loaderContainer d-flex justify-content-center align-items-center">
        <div>{resource} is loading</div>
        <div
          className="spinner-border d-flex justify-content-center align-items-center"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    // console.log(store[resource]);
    return (
      <div className="m-5">
        <div className="text-danger">
          <h1>{resource[0].toUpperCase() + resource.slice(1)}</h1>
          <div className={classes.scroll}>
            {resourceData.map((element) => (
              <Card
                resourceType={resource}
                name={element.name}
                gender={element.gender}
                hairColor={element.hair_color}
                eyeColor={element.eye_color}
                uid={element.uid}
                population={element.population}
                terrain={element.terrain}
                model={element.model}
                passengers={element.passengers}
                key={element.uid}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Section;
