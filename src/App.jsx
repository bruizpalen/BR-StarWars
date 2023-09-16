import Router from "./routes/Router";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </>
  );
}

export default App;
