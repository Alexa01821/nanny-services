import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "store/auth/selector";
import NavigationStyled from "./NavigationStyled";

const Navigation = ({ currentPage }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavigationStyled current={currentPage}>
      <li className="nav-item">
        <NavLink aria-label="Welcome page" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink aria-label="Nannies list page" to="/nannies">
          Nannies
        </NavLink>
      </li>
      {isLoggedIn && (
        <li className="nav-item">
          <NavLink aria-label="Nannies favorites list page" to="/favorites">
            Favorites
          </NavLink>
        </li>
      )}
    </NavigationStyled>
  );
};

export default Navigation;
