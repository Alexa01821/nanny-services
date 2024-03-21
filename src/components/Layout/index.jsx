import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import Header from "components/Header";

const Layout = () => {
  return (
    <LayoutStyled>
      <Header />
      <main>
        <Outlet />
      </main>
    </LayoutStyled>
  );
};

export default Layout;
