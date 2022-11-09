import "./Footer.css";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
      <div className="footer-container">
            <div className="upper-footer">
                <div className="footer-column1">
                  <img
                    src="https://res.cloudinary.com/merjur/image/upload/v1667940773/matronas/logo-om-white_ovluzt.png"
                    alt="logo-white"
                    className="logo-white"
                  />
                </div>

                <div className="footer-column2">
                  <a href="https://www.instagram.com/om.matronas/?hl=es">
                    <img src="https://res.cloudinary.com/merjur/image/upload/v1667946502/matronas/logo-instagram-white_xtxaih.png" alt="logo-instagram" className="logo-instagram" />
                  </a>
                  <a href="https://www.facebook.com/people/Ommatronas/100063999525045/">
                    <img src="https://res.cloudinary.com/merjur/image/upload/v1667945651/matronas/logo-fb-white_bsqkoq.png" alt="logo-fb" className="logo-fb" />
                  </a>
                  <a href="*">
                    <img src="https://res.cloudinary.com/merjur/image/upload/v1667946653/matronas/logo-whatsapp-white_mfv3rv.png" alt="logo-whatsapp" className="logo-whatsapp" />
                  </a>
                  <a href="https://www.youtube.com/">
                    <img src="https://res.cloudinary.com/merjur/image/upload/v1667946612/matronas/logo-youtube-white_gczblk.png" alt="logo-youtube" className="logo-youtube" />
                  </a>
                </div>

                <div className="footer-column3">
                  <Link className="footer-link" to="/">
                    <strong>Home</strong>
                  </Link>
                  <Link className="footer-link" to="/aboutus">
                    <strong>Sobre nosotras</strong>
                  </Link>
                  <Link className="footer-link" to="/blogs">
                    <strong>Blog</strong>
                  </Link>
                  <Link className="footer-link" to="/courses">
                    <strong>Cursos</strong>
                  </Link>
                </div>
            </div>

            <div className="bottom-footer">
                <div className="line"></div>
                <div>
                  <h5 className="h5-footer">
                    Diseñado y desarrollado por <strong><i> ~ Mer & Ido ~ </i></strong>
                    {/* <Link to='/'><strong>Home</strong></Link> */}
                  </h5>
                </div>
            </div>
      </div>
   
  );
};

export default Footer;
