import React from "react";
import { Link } from "react-router-dom";
import "./tribuTribuScreen.css";

function tribuTribu() {
  return (
    <div className="img-container-tribu">
      <img
        src="https://res.cloudinary.com/merjur/image/upload/v1667645484/matronas/TRIBU-TRIBU-CHAT_jajrx2.jpg"
        alt="tribu-tribu"
      />

      <h1>¡TU PROPIA TRIBU!</h1>

      <p className="text-tribu" style={{ textAlign: "justify", marginTop: "1rem" }}>
        <strong>#TribuTribu</strong> nace de nuestras primeras clases de{" "}
        <strong>Yoga para embarazadas</strong> y 
         <strong> Esferodinámia e hipnoparto.</strong> Estas mujeres increíbles,
        se acompañaron durante sus períodos de embarazo. Compartiendo sus dudas,
        miedos y alegrías. Cuando recibieron a sus criaturas al otro lado de la
        piel, compartían sus dudas con la lactancia, crianza, sueño … pero sobre
        todo se acompañaban y apoyaban. El grupo fue creciendo, y ahora es una
        gran Tribu de mujeres que da apoyo a todas aquellas que quieran formar
        parte.
      </p>

      <Link className="btn btns-admin" to="/login" role="button">
        QUIERO UNIRME
      </Link>
    </div>
  );
}

export default tribuTribu;
