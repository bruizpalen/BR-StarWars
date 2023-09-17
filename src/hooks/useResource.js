import { useState, useEffect } from "react";
import getDetails from "../services/getDetails";

const useResource = (targetResource) => {
  const [resource, setResource] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDetails(targetResource)
      .then((res) => setResource(res))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return [resource, isLoading];
};

export default useResource;
