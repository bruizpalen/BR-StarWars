const DetailPerResource = ({ resourceType, resource }) => {
  if (resourceType === "people") {
    return (
      <>
        <div className="divider mt-2 text-danger w-100">
          <hr />
        </div>
        <div className="row text-danger">
          <div className="col">
            <p className="text-center mb-0">Name:</p>
            <p className="text-center">{resource?.name}</p>
          </div>

          <div className="col">
            <p className="text-center mb-0">Gender:</p>
            <p className="text-center">{resource?.gender}</p>
          </div>
          <div className="col">
            <p className="text-center mb-0">Hair color:</p>
            <p className="text-center">{resource?.hair_color}</p>
          </div>
          <div className="col">
            <p className="text-center mb-0">Eye color:</p>
            <p className="text-center">{resource?.eye_color}</p>
          </div>
        </div>
      </>
    );
  }
  resourceType;
  if (resourceType === "vehicles") {
    return (
      <>
        <div className="divider mt-2 text-danger w-100">
          <hr />
        </div>
        <div className="row text-danger">
          <div className="col">
            <p className="text-center mb-0">Name:</p>
            <p className="text-center">{resource?.name}</p>
          </div>

          <div className="col">
            <p className="text-center mb-0">Model:</p>
            <p className="text-center">{resource?.model}</p>
          </div>
          <div className="col">
            <p className="text-center mb-0">Passengers</p>
            <p className="text-center">{resource?.passengers}</p>
          </div>
          <div className="col">
            <p className="text-center mb-0">Eye color:</p>
            <p className="text-center">{resource?.eye_color}</p>
          </div>
        </div>
      </>
    );
  }
  if (resourceType === "planets") {
    return (
      <>
        <div className="divider mt-2 text-danger w-100">
          <hr />
        </div>
        <div className="row text-danger">
          <div className="col">
            <p className="text-center mb-0">Name:</p>
            <p className="text-center">{resource?.name}</p>
          </div>

          <div className="col">
            <p className="text-center mb-0">Population:</p>
            <p className="text-center">{resource?.population}</p>
          </div>
          <div className="col">
            <p className="text-center mb-0">Terrain:</p>
            <p className="text-center">{resource?.terrain}</p>
          </div>
        </div>
      </>
    );
  }
};

export default DetailPerResource;
