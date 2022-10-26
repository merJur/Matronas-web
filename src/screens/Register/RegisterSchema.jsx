import * as Yup from 'yup';
import ERRORS from '../../constants/formErrors';

const RegisterSchema = Yup.object().shape({
    email: Yup
        .string()
        .required(ERROR_REQUIRED)
        .email(ERROR_VALID_EMAIL),
    name: Yup
        .string()
        .required(ERROR_REQUIRED),
    password: Yup
        .string()
        .min(ERROR_PASSWORD)
        .required(ERROR_REQUIRED),
    phone: "",
    userType: "",
})

name: Yup
.string()
.required(ERRORS.ERROR_REQUIRED),
email: Yup
.string()
.email(ERRORS.ERROR_VALID_EMAIL)
.required(ERRORS.ERROR_REQUIRED),
password: Yup
.string()
.min(8, ERRORS.ERROR_PASSWORD_LENGTH)
.required(ERRORS.ERROR_REQUIRED)
})

const ERRORS = {
    ERROR_REQUIRED: 'Es necesario rellenar este campo',
    ERROR_VALID_EMAIL: 'Añade un email válido',
    ERROR_PASSWORD: 'La contraseña debe tener al menos: una mayúscula, un número y una longitud de 8 caracteres'
}

export default ERRORS