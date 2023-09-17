import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import useAppContext from "../context/AppContext";

const HomePage = () => {
  const { store } = useAppContext();
  console.log("favorites", store.favorites);

  return (
    <>
      <Section resource={"people"} />
      <Section resource={"vehicles"} />
      <Section resource={"planets"} />
    </>
  );
};

export default HomePage;
