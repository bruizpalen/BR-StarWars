import getResourceList from "./getResourceList";
import getResourceDetails from "./getResourceDetails";

const getDetails = (resource) => {
  return getResourceList(resource)
    .then((resList) => {
      return Promise.all(
        resList.map((element) => {
          return getResourceDetails(element.url);
        })
      );
    })
    .catch((error) => {
      console.error("Error", error);
      throw error; // Re-throw the error for higher-level handling
    });
};

export default getDetails;
