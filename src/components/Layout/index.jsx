import { Outlet, useLocation } from "react-router-dom";
import Header from "components/Header";
import { useEffect } from "react";
import { refreshUser } from "store/auth/slice";
import { useDispatch } from "react-redux";

const Layout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const currentPage = location.pathname === "/" ? "true" : "";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch]);
  return (
    <>
      <Header currentPage={currentPage} />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
