import React, { useState } from "react";
import { createUser } from "../../services/UserServices";
import "./RegisterScreen.css";
import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
    userType: "client",
  });
  const [errors, setErrors] = useState({
    email: "",
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const validateUser = () => {
    const isValid = true;
    if (!user.name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "* El nombre es necesario",
      }));
      isValid = false;
    }
    if (!user.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "* El email es necesario",
      }));
      isValid = false;
    }
    if (!user.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          "* La contraseña debe tener al menos: una mayúscula, una minúscula, un número y una longitud de 8 caracteres",
      }));
      isValid = false;
    }
    return isValid;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const isUserValid = validateUser();
    if (isUserValid) {
      createUser(user).then((user) => {
        console.log("usuario creado  👍 ---------------------", user);
        navigate("/login");
      });
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
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

                      <form
                        onSubmit={(event) => onSubmit(event)}
                        className="mx-1 mx-md-4"
                      >
                        <div className="d-flex flex-column align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="name"
                              placeholder="Nombre"
                              className="form-control"
                              onChange={(event) =>
                                setUser({ ...user, name: event.target.value })
                              }
                              value={user.name}
                              style={{width:'308px'}}
                            />
                          </div>
                          <div className="flex-row">
                          {`${errors.name}` ? (
                            <span
                              className="alert "
                              role="alert"
                            >{`${errors.name}`}</span>
                          ) : null}
                          </div>
                        </div>

                        <div className="d-flex flex-column align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              name="email"
                              placeholder="e-mail"
                              className="form-control"
                              onChange={(event) =>
                                setUser({ ...user, email: event.target.value })
                              }
                              value={user.email}
                              style={{width:'308px'}}
                            />
                          </div>
                          {`${errors.email}` ? (
                            <span
                              className="alert "
                              role="alert"
                            >{`${errors.email}`}</span>
                          ) : null}
                        </div>

                        <div className="d-flex flex-column align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <div className='password-row'>
                                  <input
                                    type={passwordShown ? "text" : "password"}
                                    name="password"
                                    placeholder="Contraseña"
                                    className="form-control-password "
                                    onChange={(event) =>
                                      setUser({
                                        ...user,
                                        password: event.target.value,
                                      })
                                    }
                                    value={user.password}
                                  />
                                  <button onClick={togglePassword} type="button" className="btn-eye">
                                    <img src='https://res.cloudinary.com/merjur/image/upload/v1667324728/matronas/password-eye-icon_vc2r0z.png' alt='ver contraseña' className='eye'/>
                                  </button>
                                </div>
                                <div>  
                                  {`${errors.password}` ? (
                                    <span
                                      className="alert "
                                      role="alert"
                                    >{`${errors.password}`}</span>
                                  ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="phone"
                              placeholder="Número de teléfono"
                              className="form-control"
                              onChange={(event) =>
                                setUser({ ...user, phone: event.target.value })
                              }
                              value={user.phone}
                              style={{width:'308px'}}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-center mb-4">
                          <div className="userType">
                            <p className="userType-p">Tipo de usuario</p>
                            <select
                            className="userType-select"
                              name="userType"
                              onChange={handleOnChange}
                              value={user.userType}
                            >
                              <option value="client" >Cliente</option>
                              <option value="professional">
                                Profesional sanitario
                              </option>
                            </select>
                          </div>
                        </div>

                        <div
                          className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                          style={{ width: "20rem" }}
                        >
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-form"
                          >
                            Registrarse
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Register img"
                      />
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
