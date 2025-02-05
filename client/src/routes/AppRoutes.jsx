import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Layout from "../Layouts/layout";
import Login from "../pages/Login";
import Region from "../pages/Region";
import Factory from "../pages/Factory";
import Dashboard from "../pages/Dashboard";
import Ranking from "../pages/Ranking";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/region" element={<Region />} />
          <Route path="/factory" element={<Factory />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ranking" element={<Ranking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
