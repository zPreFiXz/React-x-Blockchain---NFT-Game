import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import { PeerProvider } from "../contexts/PeerContext";

const Layout = () => {
  const location = useLocation();

  // Routes without navbar
  const hideNavbarRoutes = ["/login"];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  // Routes without PeerContext
  const excludePeerRoutes = ["/login"];
  const shouldUsePeerContext = !excludePeerRoutes.includes(location.pathname);

  return shouldUsePeerContext ? (
    <PeerProvider>
      {showNavbar && <Navbar />}
      <Outlet />
    </PeerProvider>
  ) : (
    <>
      {showNavbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default Layout;
