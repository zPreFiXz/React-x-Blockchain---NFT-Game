import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";

const Layout = () => {
  const location = useLocation();

  const hideNavbarRoutes = ["/login"];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default Layout;