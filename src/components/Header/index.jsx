import MenuIcon from "@mui/icons-material/Menu";
import HeaderStyled from "./HeaderStyled";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import AuthNavList from "./AuthNavList";
import { useState } from "react";
import MenuMobil from "./MenuMobil";

const Header = ({ currentPage }) => {
  const [menuMobil, setMenuMobil] = useState(false);
  const toggleMenuMobil = () => {
    setMenuMobil((preModal) => {
      return !preModal;
    });
  };

  return (
    <HeaderStyled current={currentPage}>
      <nav className="header-container">
        <NavLink aria-label="Welcome page" to="/" className="logo">
          Nanny.Services
        </NavLink>

        <Navigation currentPage={currentPage} />
        <AuthNavList currentPage={currentPage} />

        <MenuIcon className="menu-btn btn" onClick={toggleMenuMobil} />
        {menuMobil && (
          <MenuMobil
            currentPage={currentPage}
            toggleMenuMobil={toggleMenuMobil}
          />
        )}
      </nav>
    </HeaderStyled>
  );
};

export default Header;
