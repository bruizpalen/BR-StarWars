import { createContext, useContext, useState, useEffect } from "react";
import getDetails from "../services/getDetails";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data for people, vehicles, and planets
    Promise.all([
      getDetails("people"),
      getDetails("vehicles"),
      getDetails("planets"),
    ])
      .then(([peopleData, vehiclesData, planetsData]) => {
        setPeople(peopleData);
        setVehicles(vehiclesData);
        setPlanets(planetsData);
      })
      .catch((error) => console.log("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  const store = {
    people,
    vehicles,
    planets,
    loading,
  };

  const actions = {}; // You can add functions for state management here if needed

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
