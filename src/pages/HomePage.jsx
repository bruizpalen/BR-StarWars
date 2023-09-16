import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import useAppContext from "../context/AppContext";

const HomePage = () => {
  return (
    <>
      <Section resource={"people"} />
    </>
  );
};

export default HomePage;
