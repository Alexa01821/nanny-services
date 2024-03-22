import HeaderStyled from "./HeaderStyled";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import AuthNavList from "./AuthNavList";

const Header = ({ currentPage }) => {
  return (
    <HeaderStyled current={currentPage}>
      <nav className="header-container">
        <NavLink aria-label="Welcome page" to="/" className="logo">
          Nanny.Services
        </NavLink>

        <Navigation currentPage={currentPage} />
        <AuthNavList currentPage={currentPage} />
      </nav>
    </HeaderStyled>
  );
};

export default Header;
