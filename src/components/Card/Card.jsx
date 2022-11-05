import React from "react";
import { Link } from "react-router-dom";
import"./Card.css";

function Card({ image, title, description }) {
  return (
    <div className="card" >
      <img src={image} className="card-img-top-pict" alt={title} />
      <div>
        <h3 className="card-title">{title}</h3>
        <p className="card-text" style={{textAlign: 'justify', padding: '2px 8px', maxWidth: '80%'}}>{description}</p>
        <Link variant="card-link" to="" className="btn btn-card">
          Leer más
        </Link>
      </div>
    </div>
  );
}

export default Card;
