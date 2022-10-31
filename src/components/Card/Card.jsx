import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import("../Card/Card.css");


function CardMidwives({image, title, description}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title}/>
      <div>
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <button variant="card-link" href="#" class="btn btn-primary">Leer más</button>
      </div>
    </div>
  );
}

export default CardMidwives;

