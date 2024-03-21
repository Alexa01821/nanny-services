import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUser } from "store/auth/selector";
import { WrapNavStyled } from "../AuthNavList/AuthNavStyled";
import UserInformStyled from "./UserInformStyled";

const NavList = ({ currentPage }) => {
  const { name } = useSelector(selectUser);
  return (
    <>
      {currentPage ? (
        <>
          <WrapNavStyled>
            <ul className="nav-list">
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
              <li className="nav-item">
                <NavLink
                  aria-label="Nannies favorites list page"
                  to="/favorites"
                >
                  Favorites
                </NavLink>
              </li>
            </ul>

            <UserInformStyled>
              <li className="user-inform-svg">
                <PersonIcon className="svg" />
                <p className="user-inform-name">{name}</p>
              </li>
              <li className="user-inform-btn btn">Log Out</li>
            </UserInformStyled>
          </WrapNavStyled>
        </>
      ) : (
        <>
          <ul className="nav-list">
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
            <li className="nav-item">
              <NavLink aria-label="Nannies favorites list page" to="/favorites">
                Favorites
              </NavLink>
            </li>
          </ul>

          <UserInformStyled>
            <li className="user-inform-svg">
              <PersonIcon className="svg" />
              <p className="user-inform-name">{name}</p>
            </li>
            <li className="user-inform-btn btn">Log Out</li>
          </UserInformStyled>
        </>
      )}
    </>
  );
};

export default NavList;
