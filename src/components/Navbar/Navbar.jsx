import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import { getBlogs, searchBlogs } from "../../services/BlogServices";

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleOnsearchChange = (event) => {
    setSearch(event.target.value);
  }

  const handleOnsearchClick = () => {
    searchBlogs(search)
     .then((search) => {
      console.log('**************************',search);
      if ( search ) {
        tagSearch()
        console.log(search, tagSearch);
      }
     })
    .catch(navigate('/blogs'))
  }


  const tagSearch = useCallback(() => {
    getBlogs.keyWords().then((keyWordsData) => {
      setSearch(keyWordsData)
      navigate('/blogDetail')
    });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg my-own-navbar">
        <div className="container-fluid">
          <Link style={{ marginLeft: "5rem" }} className="navbar-brand" to="/">
            Home
          </Link>
          <Link
            style={{ marginRight: "5rem" }}
            className="navbar-brand"
            to="/login"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/profile"
            style={{ marginLeft: "5rem" }}
            className="navbar-brand"
          >
            Perfil
          </Link>
          <Link
            to={"/blogs"}
            style={{ textDecoration: "none" }}
            className={"navbar-brand"}
          >
            {" "}
            Blog
          </Link>
          <Link
            to={"/courses"}
            style={{ textDecoration: "none" }}
            className={"navbar-brand"}
          >
            {" "}
            Cursos
          </Link>
          <form className="form-inline my-2 my-lg-0">
            <div className="searchDiv">
              <input
                className="form-control mr-sm-2"
                type="search"
                onChange={handleOnsearchChange}
                placeholder="Búsqueda"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="button"
                onClick={handleOnsearchClick}
                style={{ width: "6rem" }}
              >
                Buscar
              </button>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
