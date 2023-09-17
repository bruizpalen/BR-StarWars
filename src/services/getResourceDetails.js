const getResourceDetails = (url) => {
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Unable to access the resource");
      }
      return res.json();
    })
    .then((res) => {
      return {
        uid: res.result.uid,
        ...res.result.properties,
      };
    })
    .catch((error) => {
      console.error("Error", error);
      throw error;
    });
};

export default getResourceDetails;
