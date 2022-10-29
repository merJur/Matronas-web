import * as Yup from "yup";
import ERRORS from "../../constants/formErrors";

const LoginSchema = Yup.object().shape({
  name: Yup.string().required(ERRORS.ERROR_REQUIRED),
  email: Yup.string().required(ERRORS.ERROR_REQUIRED).email(ERRORS.ERROR_VALID_EMAIL),

  password: Yup.string().min(8, ERRORS.ERROR_PASSWORD).required(ERRORS.ERROR_REQUIRED),
  phone: Yup.string().min(9, ERRORS.ERROR_PHONE).max(9, ERRORS.ERROR_PHONE),
  userType: Yup.string().oneOf(["client", "professional"]).required(ERRORS.ERROR_REQUIRED),
});

export default LoginSchema