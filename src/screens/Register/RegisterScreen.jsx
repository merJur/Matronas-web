import "./RegisterScreen.css";
import React, { useState } from "react";
import { createUser } from "../../services/UserServices";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import RegisterSchema from "./RegisterSchema";
import Input from "../../components/Input/Input";

const INITIAL_VALUES = {
  email: "",
  name: "",
  password: "",
  phone: "",
  userType: ["client"],
};

const RegisterScreen = () => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    isSubmitting,
    setSubmitting,
    setFieldError,
    setFieldValue,
    getFieldProps,
    field,
    ...props
  } = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: onSubmit,
    validationSchema: RegisterSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const navigate = useNavigate();

  function onSubmit(values) {
    const formData = new formData();

    for (let value in values) {
      formData.append(value, values[value]);
    }

    createUser(formData)
      .then((user) => {
        console.log("usuario creado  👍 ---------------------", user);
        navigate("/login", {
          state: {
            email: values.email,
          },
        });
      })
      .catch((err) => {
        console.log(err.response.data);

        err.response.data &&
          Object.keys(err.response.data.errors).forEach((errorKey) => {
            setFieldError(errorKey, err.response.data.errors[errorKey]);
          });
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
    userType: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleOnChange = (event) => {
    const { name, value, type, file } = event;

    if (type === "file") {
      setForm({ ...form, [name]: file[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Registro
                      </p>

                      <form onSubmit={handleSubmit}>
                        <Input
                          type="text"
                          placeholder="Nombre"
                          name="name"
                          id="name"
                          value={values.userName}
                          onChange={handleChange}
                          error={errors.name}
                          onBlur={handleBlur}
                        />
                        <Input
                          type="email"
                          placeholder="email"
                          name="email"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                          error={errors.email}
                          onBlur={handleBlur}
                        />
                        <Input
                          type={passwordShown ? "text" : "password"}
                          placeholder="contraseña"
                          name="password"
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          error={errors.password}
                          onBlur={handleBlur}
                        />
                        <button
                          className="btnPassword"
                          onClick={togglePassword}
                          type="button"
                        >
                          Ver la contraseña
                        </button>

                          <Input
                            type="text"
                            placeholder="phone"
                            name="phone"
                            id="phone"
                            value={values.phone}
                            onChange={handleChange}
                            error={errors.phone}
                            onBlur={handleBlur}
                          />

                        <div className='userType'>
                          <p>Tipo de usuario</p>
                              <select name="userType" onChange={handleChange} error={errors.userType} onBlur={handleBlur} value={values.userType} multiple={false}>
                                <option value="client">Cliente</option>
                                <option value="professional">Profesional sanitario</option>
                              </select>
                        </div>

                        <button type="submit" className="btnPassword" disabled={isSubmitting}>
                          {isSubmitting ? 'Loading' : 'Registrarse'}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default RegisterScreen;
