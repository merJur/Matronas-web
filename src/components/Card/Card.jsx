import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import("../Card/Card.css");


function CardMidwives({image, title, description}) {
  return (
    <div style={{ width: "18rem" }}>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <button variant="card-link">Leer más</button>
      </div>
    </div>
  );
}

export default CardMidwives;
