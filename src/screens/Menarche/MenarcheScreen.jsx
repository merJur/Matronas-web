import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import "./MenarcheScreen.css";

const MenarcheScreen = () => {
  return (
    <div className="img-container-menarche">
      <img
        src="https://res.cloudinary.com/merjur/image/upload/v1667844735/matronas/6642817_tbwky0.jpg"
        alt="childhood"
      />
      <h1>MATRONAS EN LA INFANCIA</h1>

      <p className="text-menarche" style={{ textAlign: "justify" }}>
        <br />
        <strong>Las matronas</strong> podemos estar presentes en muchísimas
        áreas que no solo involucran el embarazo y nacimiento.
        <br />
        <br />
        Tenemos un rol fundamental en la educación para la salud sexual y
        afectiva de las mujeres, sus parejas, hijos e hijas, sus familias y la
        comunidad.
        <br />
        <br />
        En la medida que normalicemos estos temas, lograremos entender que{" "}
        <strong>la sexualidad</strong> es parte de los seres humanos desde
        siempre.
        <br />
        <br />
        De esta manera estaremos en el buen camino para formar y ver crecer a
        niños, niñas y adolescentes íntegros, con mayor autoestima y tolerancia,
        y, sobre todo, más felices.
        <br />
        <br />
      </p>
      {/* <div className="cards-container">
       

      </div> */}
      <CourseCard
        name="Taller de Menarquia. Primera menstruación"
        typeOfCourse="Presencial"
        image="https://res.cloudinary.com/merjur/image/upload/v1667941957/matronas/6911014_o4azoq.jpg"
        description="
          Hablaremos sobre cambios físicos y emocionales en la pubertad.
          ¿Qué deben saber las niñas antes de la primera menstruación?
          ¿Cómo hablar de menstruación sin transmitir miedos, y confusión?.
          La importancia de los referentes femeninos en este periodo de la vida.
          Las competencias que se deben desarrollar en esta época para un adecuado desarrollo de la sexualidad.
                     "
        schedule="15 de Diciembre de 2022"
        hours="11:00h"
        price="15€"
      />

      <CourseCard
        name="YOGA EN LA INFANCIA"
        typeOfCourse="Actividad Trimestral"
        image="https://res.cloudinary.com/merjur/image/upload/v1667943801/matronas/3731118_oep7td.jpg"
        description="
        El manejo de la respiración y las diferentes posturas del yoga 
        permiten que los los niños desarrollen habilidades de concentración, 
        atención, memoria y relajación. 
        El secreto está en que sea muy lúdica y divertida; 
        esto también se logra a través de canciones, juegos e historias"
        schedule="Martes y jueves"
        hours="17:30h"
        price="30€ mes"
      />
    </div>
  );
};

export default MenarcheScreen;
