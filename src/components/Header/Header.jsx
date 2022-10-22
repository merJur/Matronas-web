import React from "react";
import { Link } from 'react-router-dom';
import ('../Header/Header.css');

const Header = () => {
    return (
      <div>
        <nav className="navbar bg-light fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">OM Matronas</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">OM Matronas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">Inicio</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sobre Nosotras
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">Elena Rivilla Lizano</Link></li>
              <li><Link className="dropdown-item" to="#">Rosa Mª Sánchez Molina</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Niña y Adolescente
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">Taller de menarquia</Link></li>
              <li><Link className="dropdown-item" to="#">Sexualidad en la adolescencia</Link></li>
              <li><Link className="dropdown-item" to="#">Sexualidad en la adolescencia</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mujer
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">Yoga Mujer</Link></li>
              <li><Link className="dropdown-item" to="#">Sexualidad saludable</Link></li>
              <li><Link className="dropdown-item" to="#">Fertilidad</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Embarazo
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">Yoga Prenatal</Link></li>
              <li><Link className="dropdown-item" to="#">Esferodinamia e Hipnoparto</Link></li>
              <li><Link className="dropdown-item" to="#">Curso Preparación al parto</Link></li>
              <li><Link className="dropdown-item" to="#">Taller de Lactancia Materna</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Postparto
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">Yoga madres y bebés</Link></li>
              <li><Link className="dropdown-item" to="#">Taller creación banco de leche e incorporación al trabajo.</Link></li>
              <li><Link className="dropdown-item" to="#">Sexualidad tras la cuarentena</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Crianza
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">Yoga Mujer</Link></li>
              <li><Link className="dropdown-item" to="#">Sexualidad saludable</Link></li>
              <li><Link className="dropdown-item" to="#">Fertilidad</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menopausia
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">A</Link></li>
              <li><Link className="dropdown-item" to="#">B</Link></li>
              <li><Link className="dropdown-item" to="#">C</Link></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
      </div>
    )
}

export default Header;