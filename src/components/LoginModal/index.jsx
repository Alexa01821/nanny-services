import { Formik, Field, ErrorMessage, Form } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginModalStyled from "./LoginModalStyled";
import schemaLogin from "Schemas/schemaLogin";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Notify } from "notiflix";
import { getUser } from "store/auth/slice";
import { useState } from "react";

const LoginModal = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const [visibilityPassword, setVisibilityPassword] = useState(false);

  const handleSubmit = (data) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        Notify.success(`Welcome to your account`);
        const UserCreation = {
          id: user.uid,
          token: user.accessToken,
          email: user.email,
          name: user.displayName,
        };

        dispatch(getUser(UserCreation));
        Notify.success(`You have successfully log in to your account`);

        toggleModal();
      })
      .catch((error) => {
        Notify.failure("Wrong email or password. Try again");
        console.log(error);
      });
  };

  return (
    <LoginModalStyled>
      <h2 className="modal-title">Log In </h2>
      <p className="modal-subtitle">
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={schemaLogin}
        onSubmit={(data) => {
          handleSubmit(data);
        }}
      >
        <Form className="modal-form">
          <label className="modal-label">
            <Field
              name="email"
              placeholder="Email"
              type="email"
              className="modal-input"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="modal-error-message"
            />
          </label>
          <label className="modal-label">
            <Field
              name="password"
              placeholder="Password"
              type={visibilityPassword ? "text" : "password"}
              className="modal-input"
            />
            {visibilityPassword ? (
              <VisibilityIcon
                className="visibility-svg"
                onClick={() => setVisibilityPassword(false)}
              />
            ) : (
              <VisibilityOffIcon
                className="visibility-svg"
                onClick={() => setVisibilityPassword(true)}
              />
            )}

            <ErrorMessage
              name="password"
              component="div"
              className="modal-error-message"
            />
          </label>
          <button type="submit" className="modal-btn btn">
            Log in
          </button>
        </Form>
      </Formik>
    </LoginModalStyled>
  );
};

export default LoginModal;
