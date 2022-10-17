import React, { useEffect, useState } from 'react';
import { createUser, getUserDetail, updateUser, deleteUser } from '../../services/UserServices'
import { useParams  } from 'react-router-dom';
import("./RegisterScreen.css");


const RegisterScreen = ({ edit }) => {
  const [user, setUser] = useState({ email: '', name: '', password: '', phone: '', userType: '' }) 
  const { id } = useParams()

  // useEffect(() => {
  //   createUser()
  //     .then(user => setUser(user))
  //   }, [user])

  const handleOnChange = (event) => {
    const { name, email, password, phone, userType, value } = event.target
    setUser({
      ...user, 
      [name]: value,
      [email]: value,
      [password]: value,
      [phone]: value,
      [userType]: value
    })
   }

   const onSubmit = (event) => {
    event.preventDefault()

      createUser(user).then(user => console.log(user))
    }

console.log('....................', user);
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
                        Sign up
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
                              name="userName"
                              placeholder="User name"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              </label>
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
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >  </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="password"
                              placeholder="Enter password"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            > </label>
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
                              onChange={(event) => handleOnChange(event)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            > </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="userType"
                              placeholder="Type of user: client or proffesional"
                              className="form-control"
                              onChange={(event) => handleOnChange(event)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            > </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4" style={{width: '20rem'}}>
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            
                          >
                            Register
                          </button>
                        </div>
                        <div className="d-grid gap-2">
                          
                          <div className="d-grid gap-2 mt-2">
                            <a
                              href="/login/google"
                              className="btn btn-danger border-0"
                              style={{width: '20rem', margin: '0 auto', padding: '0.5rem 1 rem', fontSize: '1.25rem'}}
                            >
                              <i className="fa fa-google"></i>
                              Sign up with Google
                            </a>
                          </div>
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
