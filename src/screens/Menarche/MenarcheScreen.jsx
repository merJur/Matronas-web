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
        image="https://res.cloudinary.com/merjur/image/upload/v1667411763/matronas/girl_hndqu8.png"
        description="
                 Hablaremos sobre cambios físicos y emocionales en la pubertad. 
                 ¿Qué deben saber las niñas antes de la primera menstruación?.
                 ¿Cómo hablar de menstruación sin transmitir miedos, estereotipos e informaciones que generen confusión?.
                 La importancia de los referentes femeninos en este periodo de la vida. 
                 Las competencias que se deben desarrollar en esta época para un adecuado desarrollo de la sexualidad.

                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis dui non mauris tincidunt egestas. Aenean consequat ex velit, ut malesuada magna molestie ac. Donec tincidunt velit nec leo suscipit tempor. Pellentesque libero leo, euismod ut nibh vel, laoreet eleifend ante. Maecenas tristique hendrerit lorem, vel ultrices orci vulputate et. Maecenas feugiat non diam sit amet efficitur. Pellentesque mattis nec lectus eu mollis. In congue ultrices lectus nec mollis. Proin cursus aliquet nulla vitae tincidunt. Sed congue et velit ac sollicitudin.
                     "
        schedule="15 de dciembre de 2022"
        hours="11:00h"
        price="15€"
      />

      <CourseCard
        name="YOGA EN LA INFANCIA"
        typeOfCourse="Actividad"
        image="https://res.cloudinary.com/merjur/image/upload/v1667411763/matronas/girl_hndqu8.png"
        description="
        Aenean at est nec est vehicula gravida. Curabitur eu massa augue. Sed odio nisl, commodo vitae ultricies quis, pharetra aliquet metus. Praesent pretium, metus in tempus ultrices, mauris dui pretium magna, volutpat blandit ipsum odio a arcu. Aliquam a enim risus. Sed quis vulputate turpis, a luctus tellus. Maecenas interdum odio a justo mattis tincidunt. Mauris ultrices ex vel mauris ultrices scelerisque. Vestibulum ac dignissim magna. Aliquam mollis nulla sed nibh maximus placerat. Vestibulum dapibus molestie scelerisque. Aliquam euismod mattis eros non vulputate. Donec tellus purus, cursus malesuada tempus in, maximus et mi. Fusce dapibus a sem non sagittis. Donec tristique ullamcorper commodo. Duis laoreet fringilla rutrum.
        Aenean at est nec est vehicula gravida. Curabitur eu massa augue. Sed odio nisl, commodo vitae ultricies quis, pharetra aliquet metus. Praesent pretium, metus in tempus ultrices, mauris dui pretium magna, volutpat blandit ipsum odio a arcu. Aliquam a enim risus. Sed quis vulputate turpis, a luctus tellus. Maecenas interdum odio a justo mattis tincidunt. Mauris ultrices ex vel mauris ultrices scelerisque. Vestibulum ac dignissim magna. Aliquam mollis nulla sed nibh maximus placerat. Vestibulum dapibus molestie scelerisque. Aliquam euismod mattis eros non vulputate. Donec tellus purus, cursus malesuada tempus in, maximus et mi. Fusce dapibus a sem non sagittis. Donec tristique ullamcorper commodo. Duis laoreet fringilla rutrum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis dui non mauris tincidunt egestas. Aenean consequat ex velit, ut malesuada magna molestie ac. Donec tincidunt velit nec leo suscipit tempor. Pellentesque libero leo, euismod ut nibh vel, laoreet eleifend ante. Maecenas tristique hendrerit lorem, vel ultrices orci vulputate et. Maecenas feugiat non diam sit amet efficitur. Pellentesque mattis nec lectus eu mollis. In congue ultrices lectus nec mollis. Proin cursus aliquet nulla vitae tincidunt. Sed congue et velit ac sollicitudin.
                     "
        schedule="Martes y jueves"
        hours="17:30h"
        price="30€ mes"
      />
    </div>
  );
};

export default MenarcheScreen;
