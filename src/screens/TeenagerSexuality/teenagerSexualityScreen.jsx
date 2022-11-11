import React from "react";
import "./teenagerSexualityScreen.css";
import CourseCard from "./../../components/CourseCard/CourseCard";

const teenagerSexualityScreen = () => {
  return (
    <div className="img-container-teenager">
      <img
        src="https://res.cloudinary.com/merjur/image/upload/v1667844735/matronas/6596292_negekc.jpg"
        alt="teenagers"
      />
      <h1>MATRONAS EN LA EDUCACIÓN SEXUAL</h1>

      <p className="text-teenagers" style={{ textAlign: "center" }}>
        Somos, nos vivimos y nos expresamos como <strong>seres sexuados</strong>{" "}
        y es imposible no hacerlo.
        <br />
        <br />
        La sexualidad es algo dinámico que no puede apartarse del resto de los
        procesos de la vida.
        <br />
        <br /> Por ello, la educación sexual debe ser integrada en la educación
        general del individuo, para ser en definitiva más humana.
        <br />
        <br />
        Para que una educación sexual sea realmente efectiva, debe ser ofrecida
        por el entorno en el que el individuo se mueve.
        <br />
        <br />
        Por ello los principales agentes son los padres y los educadores.
      </p>

      <CourseCard
        name="TALLER SEXUALIDAD EN LA ADOLESCENCIA."
        image="https://res.cloudinary.com/merjur/image/upload/v1667844734/matronas/4338935_nu6crc.jpg"
        typeOfCourse="Presencial"
        description="
        La educación sexual es un elemento de la educación en general. Buscamos cumplir con un objetivo de carácter formativo,
        creando en el individuo, sea niño, joven o adulto, una serie de actitudes, valores y comportamientos ante su propio cuerpo, 
        hacia la realidad de su sexo, así como de su rol actual y futuro. 
        De ahí que educar sexualmente implique completar el desarrollo integral del individuo, evitando que se forme una imagen 
        distorsionada, negativa o falsa sobre el sexo y su sexualidad, contribuyendo así a evitar futuros problemas relacionados,
        así como una forma de sensibilizar y prevenir la violencia de género.
           "
        schedule="25 de noviembre de 2022"
        hours="18:00h"
        price="15€"
      />

      <CourseCard
        name="CÓMO HABLAR CON LOS HIJOS SOBRE LA ORIENTACIÓN SEXUAL"
        image="https://res.cloudinary.com/merjur/image/upload/v1667841231/matronas/3567801_nkkysi.jpg"
        typeOfCourse="Presencial"
        description="
        Los jóvenes que experimentaron conductas de gran rechazo por parte de su familia tenían 
        ocho veces más probabilidades de intentar suicidarse que aquellos que experimentaron el amor y 
        la aceptación de sus padres y educadores. Podemos ayudar a nuestros niños asegurándonos de que estamos creando momentos de inclusión en nuestras familias. 
        Nuestros hijos están escuchando y absorbiendo lo que hacemos, decimos o no decimos frente a personas con diferente orientación sexual.
"
        schedule="23 de noviembre de 2022"
        hours="18:00h"
        price="15€"
      />
    </div>
  );
};

export default teenagerSexualityScreen;
