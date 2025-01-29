import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../Layouts/layout";
import Login from "../pages/Login";
import Region from "../pages/Region";
import Factory from "../pages/Factory";
import Dashboard from "../pages/Dashboard";
import Building from "../pages/Building";
import Ranking from "../pages/Ranking";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/region" element={<Region />} />
          <Route path="/factory" element={<Factory />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Building" element={<Building />} />
          <Route path="/Ranking" element={<Ranking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
