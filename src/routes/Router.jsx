import { BrowserRouter, Routes, Route } from "react-router-dom";

import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";

import Navbar from "../components/Navbar";

const Router = () => {
  return (
    <BrowserRouter basename="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
