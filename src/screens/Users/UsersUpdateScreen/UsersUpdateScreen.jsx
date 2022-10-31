import React, { useState, useEffect } from "react";
import { updateUser, getUserDetail } from "../../../services/UserServices";
import { useParams, useNavigate } from "react-router-dom";

const UsersUpdateScreen = () => {
  const [user, setUser] = useState({ email: "", name: "", password:'', phone:'', userType:'' });
  const { id } = useParams();
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  useEffect(() => {
    getUserDetail(id).then((fetchedUser) => setUser(fetchedUser));
  }, [id]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    updateUser(id, user).then((user) => {
      console.log(user);
      navigate("/users");
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
                        Update user
                      </p>

                      <form
                        onSubmit={(event) => onSubmit(event)}
                        className="mx-1 mx-md-4"
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="name"
                              placeholder="User name"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                              value={user.name}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              name="email"
                              placeholder="e-mail"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                              value={user.email}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type={passwordShown ? "text" : "password"}
                              name="password"
                              placeholder="Enter password"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                              value={user.password}
                            />
                            <button onClick={togglePassword} type="button">
                              Show Password
                            </button>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="phone"
                              placeholder="Phone number"
                              className="form-control"
                              onChange={(event) =>
                                setUser({ ...user, phone: event.target.value })
                              }
                              value={user.phone}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="userType"
                              placeholder="Type of user: client or professional"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                              value={user.userType}
                            />
                          </div>
                        </div>

                        <div
                          className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                          style={{ width: "20rem" }}
                        >
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Update user info
                          </button>
                        </div>
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

export default UsersUpdateScreen;
