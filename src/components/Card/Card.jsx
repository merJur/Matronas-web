import React from "react";
import { Link } from "react-router-dom";
import('../Card/Card.css');

const midwives = [
    {
        image: "",
        title: "Elena Rivilla Lizano",
        description: "Soy Elena, matrona enamorada de mi profesión y mamá de dos niños que son los grandes maestros de mi vida.",
    },
    {
        image: "",
        title: "Rosa Mª Sánchez Molina",
        description: "Soy Rosa, matrona enamorada de mi profesión y mamá de dos niños que son los grandes maestros de mi vida."
    }
]

function Card(){
    return (
    <div className="container">
        <div className="midwives">
            {midwives.map((midwive, index) =>
            <div key={midwive-{index}} className="feature">
                <img src={midwive.image} className="card-img-top" alt={midwive.title}/>
                <div className="card-body">
                <h5 className="card-title">{midwive.title}</h5>
                <p className="card-text">{midwive.description}</p>   
                <Link to="#" class="btn btn-primary">Go somewhere</Link>   
                </div>
            </div>
                )}
      </div> 
    </div>   
  );
};

export default Card;
