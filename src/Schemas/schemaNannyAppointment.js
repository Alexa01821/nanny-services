import * as Yup from "yup";

const schemaNannyAppointment = Yup.object().shape({
  address: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),

  childAge: Yup.string().required("Required"),
  phone: Yup.string()
    .required("Required")
    .min(10, "Too Short!")
    .max(14, "Too Short!"),
  time: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  parents: Yup.string().required("Required"),
  comment: Yup.string(),
});

export default schemaNannyAppointment;
