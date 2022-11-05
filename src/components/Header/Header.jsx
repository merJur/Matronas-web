import React, { useState } from "react";
import { useAuthContext } from "./../../context/AuthContext";
// import { getBlogs } from "./../../services/BlogServices";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const { user } = useAuthContext();

  const handleOnsearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleOnsearchClick = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  // const tagSearch = useCallback(() => {
  //   getBlogs.keyWords().then((keyWordsData) => {
  //     setSearch(keyWordsData);
  //     navigate("/blogDetail");
  //   });
  // }, []);

  return (
    <div>
      <nav className="navbar my-header">
        <div className="container-header">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/merjur/image/upload/v1667408752/matronas/logo-om-matronas_murynl.png"
              className="d-inline-block align-top  home-icon"
              alt="Logo Om Matronas"
            />
          </Link>

          {!user ? (
            <div>
              <Link to="/login">
                <img
                  src="https://res.cloudinary.com/merjur/image/upload/v1667300638/matronas/user-icon_w9hbsr.png"
                  alt="login/profile-icon"
                  className="user-icon"
                />
              </Link>
            </div>
          ) : null}
          {user ? (
            <div>
              <Link to="/profile">
                <img
                  src="https://res.cloudinary.com/merjur/image/upload/v1667300638/matronas/user-icon_w9hbsr.png"
                  alt="login/profile-icon"
                  className="user-icon"
                />
              </Link>
            </div>
          ) : null}
          <button
            className="navbar-toggler hamburguer-icon"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Om Matronas
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item" data-bs-toggle="offcanvas">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item" data-bs-toggle="offcanvas">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/aboutus"
                  >
                    Sobre Nosotras
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Niña y Adolescente
                  </Link>
                  <ul className="dropdown-menu">
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/menarche">
                        Menarquia. De niña a adolescente
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/teenager-sexuality">
                        Sexualidad en la adolescencia
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mujer
                  </Link>
                  <ul className="dropdown-menu">
                    <li data-bs-toggle="offcanvas">
                      <Link
                        className="dropdown-item"
                        to="/woman-healthy-sexuality"
                      >
                        Sexualidad saludable
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/fertility">
                        Fertilidad
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Embarazo
                  </Link>
                  <ul className="dropdown-menu" data-bs-toggle="offcanvas">
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/sexuality-pregnancy">
                        Sexualidad en el embarazo
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/courses">
                        Esferodinamia e Hipnoparto
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/courses">
                        Yoga Prenatal
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/tribu-tribu">
                        ¡Nuestra tribu de madres!
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Postparto
                  </Link>
                  <ul className="dropdown-menu">
                    <li data-bs-toggle="offcanvas">
                      <Link
                        className="dropdown-item"
                        to="/postpartum-sexuality"
                      >
                        Sexualidad tras el postparto
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/courses">
                        Yoga madres y bebés
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menopausia
                  </Link>
                  <ul className="dropdown-menu">
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/menopause-sexuality">
                        Sexualidad en la Menopausia
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link
                        className="dropdown-item"
                        to="/physical-activity-menopause"
                      >
                        Actividad Física en la Menopausia
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item" data-bs-toggle="offcanvas">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/blogs"
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item" data-bs-toggle="offcanvas">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/courses"
                  >
                    Cursos
                  </Link>
                </li>
              </ul>
              <form
                className="form-inline my-2 my-lg-0"
                onSubmit={handleOnsearchClick}
              >
                <div className="searchDiv">
                  <input
                    className="form-control mr-sm-2 search-nav"
                    type="search"
                    onChange={handleOnsearchChange}
                    placeholder="Búsqueda"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success  my-sm-0 btn-search"
                    type="submit"
                  >
                    Buscar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
