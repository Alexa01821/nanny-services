import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "store/auth/selector";
import { AuthListStyled, UserInformStyled } from "./AuthNavStyled";

const AuthNavList = (currentPage) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  return (
    <>
      {!isLoggedIn ? (
        <AuthListStyled current={currentPage}>
          <li className="auth-item log">Log In</li>
          <li className="auth-item reg">Registration</li>
        </AuthListStyled>
      ) : (
        <UserInformStyled current={currentPage}>
          <li className="user-inform-svg">
            <PersonIcon className="svg" />
            <p className="user-inform-name">{name}</p>
          </li>
          <li className="user-inform-btn btn">Log Out</li>
        </UserInformStyled>
      )}
    </>
  );
};

export default AuthNavList;
