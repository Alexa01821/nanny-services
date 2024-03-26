import { ErrorMessage, Field, Form, Formik } from "formik";
import NannyModalStyled from "./NannyModalStyled";
import schemaNannyAppointment from "Schemas/schemaNannyAppointment";
import { Notify } from "notiflix";

const NannyModal = ({ nannyData, toggleModal }) => {
  const { name, avatar_url } = nannyData;
  const handleSubmit = (data) => {
    localStorage.setItem(
      "appointment",
      JSON.stringify({
        nannyName: name,
        address: data.address,
        phone: data.phone,
        childAge: data.childAge,
        time: data.time,
        parents: data.parents,
        email: data.email,
        comment: data.comment,
      })
    );
    Notify.success("Your application has been accepted!");

    toggleModal();
  };
  return (
    <NannyModalStyled>
      <h2 className="modal-title">Make an appointment with a babysitter</h2>
      <p className="modal-subtitle">
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>
      <div className="img-wrap">
        <img src={avatar_url} alt="nanny-avatar" className="avatar" />
        <div className="text-wrap">
          <p className="text">Your nanny</p>
          <h3 className="text-title">{name}</h3>
        </div>
      </div>
      <Formik
        initialValues={{
          address: "",
          phone: "",
          childAge: "",
          time: "",
          parents: "",
          email: "",
          comment: "",
        }}
        validationSchema={schemaNannyAppointment}
        onSubmit={(data) => {
          handleSubmit(data);
        }}
      >
        <Form className="modal-form">
          <div className="wrap-small-input">
            <label className="modal-label">
              <Field
                name="address"
                placeholder="Address"
                className="modal-input small"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="modal-error-message"
              />
            </label>
            <label className="modal-label">
              <Field
                name="phone"
                placeholder="+380"
                className="modal-input small"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="modal-error-message"
              />
            </label>
          </div>
          <div className="wrap-small-input">
            <label className="modal-label">
              <Field
                name="childAge"
                placeholder="Child's age"
                className="modal-input small"
              />
              <ErrorMessage
                name="childAge"
                component="div"
                className="modal-error-message"
              />
            </label>
            <label className="modal-label">
              <Field
                name="time"
                placeholder="00:00"
                type="time"
                className="modal-input small"
              />
              <ErrorMessage
                name="time"
                component="div"
                className="modal-error-message"
              />
            </label>
          </div>

          <label className="modal-label">
            <Field
              name="parents"
              placeholder="Father's or mother's name"
              className="modal-input"
            />
            <ErrorMessage
              name="parents"
              component="div"
              className="modal-error-message"
            />
          </label>

          <label className="modal-label">
            <Field
              name="email"
              placeholder="jane@acme.com"
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
              name="comment"
              placeholder="Comment"
              className="modal-input comment"
            />
            <ErrorMessage
              name="comment"
              component="div"
              className="modal-error-message"
            />
          </label>

          <button type="submit" className="modal-btn btn">
            Send
          </button>
        </Form>
      </Formik>
    </NannyModalStyled>
  );
};

export default NannyModal;
