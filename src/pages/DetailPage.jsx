import React from "react";
import { useParams } from "react-router-dom";
import useAppContext from "../context/AppContext";
import DetailPerResource from "../components/DetailPerResource";
import babyYoda from "../assets/baby_yoda.jpg";
import planet from "../assets/planet.jpg";
import vehicle from "../assets/satelite.jpg";
import "../index.css";

const DetailPage = () => {
  const { resourceType, uid } = useParams();
  const { store } = useAppContext();
  const { people, vehicles, planets } = store;
  const { peopleIsLoading, vehiclesIsLoading, planetsIsLoading } = store;

  const imagesPerResource = {
    people: babyYoda,
    vehicles: vehicle,
    planets: planet,
  };

  const exampleText = `Morbi vel vehicula diam, posuere bibendum dui. Nulla facilisi. 
  Vestibulum pharetra tellus diam, eget volutpat enim eleifend et. 
  Mauris interdum nunc mattis, pharetra libero quis, dictum sapien. 
  Ut malesuada justo vel iaculis vehicula. In feugiat metus eget fringilla lacinia. 
  Vestibulum convallis, enim in cursus vestibulum, arcu elit ornare libero, et sollicitudin arcu metus et sapien.`;

  const getResource = (listResource, targetId) => {
    const foundResource = listResource.find(
      (resource) => resource.uid === targetId
    );
    return foundResource;
  };

  if (!["people", "vehicles", "planets"].includes(resourceType)) {
    return <div>Invalid resource type</div>;
  }

  if (peopleIsLoading || vehiclesIsLoading || planetsIsLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        {" "}
        Loading...{" "}
      </div>
    );
  }

  const resource = getResource(store[resourceType], uid);

  if (!resource) {
    return <div>Resource not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div
          className={`col-6 justify-content-center align-items-center d-flex`}
        >
          {
            <img
              src={imagesPerResource[resourceType]}
              className="detailImage"
              alt={resourceType}
            />
          }
        </div>
        <div className="col-6 text-center justify-content-center align-items-center d-flex flex-column">
          <h2>{resource.name}</h2>
          <p>{exampleText}</p>
        </div>
        <DetailPerResource resourceType={resourceType} resource={resource} />
      </div>
    </div>
  );
};

export default DetailPage;
