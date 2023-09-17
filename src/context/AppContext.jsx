import { createContext, useContext, useState } from "react";
import useResource from "../hooks/useResource";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [people, peopleIsLoading] = useResource("people");
  const [vehicles, vehiclesIsLoading] = useResource("vehicles");
  const [planets, planetsIsLoading] = useResource("planets");
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = ({ name }) => {
    if (!favorites.includes(name)) {
      setFavorites([...favorites, name]);
    }
  };

  const removeFromFavorites = ({ name }) => {
    const updatedFavorites = favorites.filter((item) => item !== name);
    setFavorites(updatedFavorites);
  };

  const store = {
    people,
    vehicles,
    planets,
    peopleIsLoading,
    vehiclesIsLoading,
    planetsIsLoading,
    favorites,
  };

  const actions = {
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
