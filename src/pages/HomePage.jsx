import React from "react";
import Section from "../components/Section";
import useAppContext from "../context/AppContext";

const HomePage = () => {
  const { store } = useAppContext();

  return (
    <>
      <Section resource={"people"} />
      <Section resource={"vehicles"} />
      <Section resource={"planets"} />
    </>
  );
};

export default HomePage;
