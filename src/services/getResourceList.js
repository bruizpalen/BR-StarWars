// getResourceList.js
const getResourceList = (resource) => {
  return fetch(`https://www.swapi.tech/api/${resource}/`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Unable to reach the resource ${resource}`);
      }
      return res.json();
    })
    .then((res) => res.results)
    .catch((error) => {
      console.error("Error", error);
      throw error;
    });
};

export default getResourceList;
