import React from "react";
import { Link } from "react-router-dom";
import"./Card.css";

function Card({ image, title, description }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div>
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <Link variant="card-link" to="" className="btn btn-primary">
          Leer más
        </Link>
      </div>
    </div>
  );
}

export default Card;
