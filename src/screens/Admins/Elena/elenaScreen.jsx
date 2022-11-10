import React from "react";
import './elenaScreen.css'

const Elena = () => {
  return (
    <div className="container admin-container" >
      <img
        className="adminPhoto"
        src="https://res.cloudinary.com/merjur/image/upload/v1668004573/matronas/IMG_6163_hub9g8.jpg"
        alt="Elena Rivilla"
      />
      <div className="text-admin">
        <p className="first-line-elena">Soy <strong>Elena</strong>, <strong>matrona</strong> enamorada de mi profesión y <strong>mamá</strong> de dos niños que son
        los grandes maestros de mi vida.</p> <br/>
        <p>El <strong>yoga</strong> lleva vinculado a mi vida desde
        hace más de 25 de años y ha sido esa <strong>guía interior</strong> que ha estado
        presente en todos los momentos de mi vida, pero sobre todo, en mis
        <strong> maternidades</strong>. Es por ello, que me formé como instructora de yoga para el
        <strong> embarazo</strong>, el <strong>postparto</strong> y la <strong>crianza</strong>. </p>
        <p></p> Además mi formación es continua y
        soy asesora de <strong>lactancia materna</strong> y me formé en <strong>Medicina Tradicional
        China</strong> aplicada al embarazo, al parto y postparto. Tuve el honor de haber
        sido la Supervisora que abrió una de las maternidades referentes en la
        atención al parto de la Comunidad de Madrid y tras mi paso por la
        gestión, sigo dentro del equipo haciendo lo que más me gusta, acompañar
        el nacimiento de un nuevo ser y me siento honrada por ser espectadora
        privilegiada del renacer de esos padres y madres.
      </div>
    </div>
  );
};

export default Elena;
