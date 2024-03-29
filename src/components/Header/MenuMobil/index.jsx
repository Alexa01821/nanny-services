import MenuIcon from "@mui/icons-material/Menu";
import MenuMobilStyled from "./MenuMobilStyled";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink, useNavigate } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "store/auth/selector";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { logOut, refreshUser } from "store/auth/slice";
import { Notify } from "notiflix";
import LoginModal from "components/LoginModal";
import BasicModalWindow from "components/BasicModalWindow";
import RegistrationModal from "components/RegistrationModal";

const MenuMobil = ({ toggleMenuMobil, currentPage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  const [modalRegistration, setModalRegistration] = useState(false);
  const [modalLogIn, setModalLogIn] = useState(false);

  const handleModalRegistration = () => {
    setModalRegistration((state) => !state);
  };

  const handleModalLogIn = () => {
    setModalLogIn((state) => !state);
  };

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logOut());
        navigate("/", { replace: true });
        Notify.success("You have successfully logged out");
      })
      .catch((error) => {
        Notify.failure("Oops, something went wrong");
        console.log(error);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem("token");
      if (token) {
        dispatch(refreshUser());
      }
    }
  }, [dispatch, isLoggedIn]);

  return (
    <MenuMobilStyled>
      <MenuIcon className="menu-btn-burger btn" onClick={toggleMenuMobil} />
      <ul className="menu-burger-navigation" current={currentPage}>
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
      </ul>
      {!isLoggedIn ? (
        <ul className="menu-burger-auth" current={currentPage}>
          <li className="auth-item log" onClick={handleModalLogIn}>
            Log In
          </li>
          <li className="auth-item reg" onClick={handleModalRegistration}>
            Registration
          </li>
        </ul>
      ) : (
        <ul className="menu-burger-user" current={currentPage}>
          <li className="user-inform-svg">
            <PersonIcon className="svg" />
            <p className="user-inform-name">{name}</p>
          </li>
          <li className="user-inform-btn btn" onClick={handleLogOut}>
            Log Out
          </li>
        </ul>
      )}
      {modalRegistration && (
        <BasicModalWindow toggleModal={handleModalRegistration}>
          <RegistrationModal toggleModal={handleModalRegistration} />
        </BasicModalWindow>
      )}
      {modalLogIn && (
        <BasicModalWindow toggleModal={handleModalLogIn}>
          <LoginModal toggleModal={handleModalLogIn} />
        </BasicModalWindow>
      )}
    </MenuMobilStyled>
  );
};

export default MenuMobil;
