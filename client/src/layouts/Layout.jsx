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

  return (
    <div className="font-kanit">
      {shouldUsePeerContext ? (
        <PeerProvider>
          {showNavbar && <Navbar />}
          <Outlet />
        </PeerProvider>
      ) : (
        <>
          {showNavbar && <Navbar />}
          <Outlet />
        </>
      )}
    </div>
  );
};

export default Layout;
