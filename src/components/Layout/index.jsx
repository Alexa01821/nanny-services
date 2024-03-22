import { Outlet, useLocation } from "react-router-dom";
import Header from "components/Header";

const Layout = () => {
  const location = useLocation();
  const currentPage = location.pathname === "/" ? "true" : "";

  return (
    <>
      <Header currentPage={currentPage} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
