import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import("../Card/Card.css");

const midwives = [
  {
    image: "",
    title: "Elena Rivilla Lizano",
    description:
      "Soy Elena, matrona enamorada de mi profesión y mamá de dos niños que son los grandes maestros de mi vida.",
  },
  {
    image: "",
    title: "Rosa Mª Sánchez Molina",
    description:
      "Soy Rosa, matrona enamorada de mi profesión y mamá de dos niños que son los grandes maestros de mi vida.",
  },
];

function CardMidwives() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{midwives.title}</Card.Title>
        <Card.Text>{midwives.description}</Card.Text>
        <Button variant="card-link">Leer más</Button>
      </Card.Body>
    </Card>
  );
}

export default CardMidwives;
