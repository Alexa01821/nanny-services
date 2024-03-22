import { NavLink } from "react-router-dom";
import { WrapNavStyled, AuthListStyled } from "./AuthNavStyled";

const AuthNavList = ({ currentPage }) => {
  return (
    <>
      {currentPage ? (
        <WrapNavStyled current={currentPage}>
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
          </ul>

          <AuthListStyled current={currentPage}>
            <li className="auth-item log">Log In</li>
            <li className="auth-item reg">Registration</li>
          </AuthListStyled>
        </WrapNavStyled>
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
          </ul>

          <AuthListStyled current={currentPage}>
            <li className="auth-item log">Log In</li>
            <li className="auth-item reg">Registration</li>
          </AuthListStyled>
        </>
      )}
    </>
  );
};

export default AuthNavList;
