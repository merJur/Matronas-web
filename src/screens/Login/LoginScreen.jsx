import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import { login } from "./../../services/AuthService";
import { useAuthContext } from "./../../context/AuthContext";

const LoginScreen = () => {
  const { login: loginContext } = useAuthContext();
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    login(user).then((response) => {
        loginContext(response.accessToken, () => {
        navigate("/profile");
      });
    });
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
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
                        Iniciar sesión
                      </p>

                      <form
                        onSubmit={(event) => onSubmit(event)}
                        className="mx-1 mx-md-4"
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              name="email"
                              placeholder="e-mail"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type={passwordShown ? "text" : "password"}
                              name="password"
                              placeholder="Contraseña"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                            />
                            <button onClick={togglePassword} type='button'>
                              Ver la contraseña
                            </button>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            style={{ width: "20rem" }}
                          >
                            Entrar
                          </button>
                        </div>
                      </form>
                      <p>¿No tienes cuenta? pincha {<Link to='/register'><strong>aquí</strong></Link>}</p>
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

export default LoginScreen;
