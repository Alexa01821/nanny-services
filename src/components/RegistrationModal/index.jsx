import { Formik, Field, ErrorMessage, Form } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RegistrationModalStyled from "./RegistrationModalStyled";
import schemaRegistration from "Schemas/schemaRegistration";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { Notify } from "notiflix";
import { useDispatch } from "react-redux";
import { getUser } from "store/auth/slice";

const RegistrationModal = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const [visibilityPassword, setVisibilityPassword] = useState(false);

  const handleSubmit = (data) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: data.name,
        });
        const user = userCredential.user;

        const UserCreation = {
          id: user.uid,
          token: user.accessToken,
          email: data.email,
          name: data.name,
        };

        dispatch(getUser(UserCreation));

        Notify.success(
          `You have successfully registered, log in to your account`
        );
        toggleModal();
      })
      .catch((error) => {
        Notify.failure("Wrong email or password. Try again");
        console.log(error);
      });
  };

  return (
    <RegistrationModalStyled>
      <h2 className="modal-title">Registration</h2>
      <p className="modal-subtitle">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={schemaRegistration}
        onSubmit={(data) => {
          handleSubmit(data);
        }}
      >
        <Form className="modal-form">
          <label className="modal-label">
            <Field
              name="name"
              placeholder="Name"
              type="text"
              className="modal-input"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="modal-error-message"
            />
          </label>
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
    </RegistrationModalStyled>
  );
};

export default RegistrationModal;
