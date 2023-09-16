import Card from "./components/Card";
import useAppContext from "../../context/AppContext";
import classes from "./Section.module.css";

const Section = ({ resource }) => {
  const { store } = useAppContext();
  const people = store[resource];
  const isLoading = store.loading;
  console.log(store.people);
  if (isLoading) {
    return (
      <div
        className="spinner-border d-flex justify-content-center align-items-center h-100"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else {
    return (
      <div className={classes.scroll}>
        {people.map((element) => (
          // console.log(element.name, element.gender, element.hair_color)
          <Card
            name={element.name}
            gender={element.gender}
            hairColor={element.hair_color}
            eyeColor={element.eye_color}
            key={element.uid}
          />
        ))}
      </div>
    );
  }
};

export default Section;
