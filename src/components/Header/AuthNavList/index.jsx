import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "store/auth/selector";
import { AuthListStyled, UserInformStyled } from "./AuthNavStyled";
import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Notify } from "notiflix";
import BasicModalWindow from "components/BasicModalWindow";
import { logOut, refreshUser } from "store/auth/slice";
import { useNavigate } from "react-router-dom";
import LoginModal from "components/LoginModal";
import RegistrationModal from "components/RegistrationModal";

const AuthNavList = (currentPage) => {
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
    <>
      {!isLoggedIn ? (
        <AuthListStyled current={currentPage}>
          <li className="auth-item log" onClick={handleModalLogIn}>
            Log In
          </li>
          <li className="auth-item reg" onClick={handleModalRegistration}>
            Registration
          </li>
        </AuthListStyled>
      ) : (
        <UserInformStyled current={currentPage}>
          <li className="user-inform-svg">
            <PersonIcon className="svg" />
            <p className="user-inform-name">{name}</p>
          </li>
          <li className="user-inform-btn btn" onClick={handleLogOut}>
            Log Out
          </li>
        </UserInformStyled>
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
    </>
  );
};

export default AuthNavList;
