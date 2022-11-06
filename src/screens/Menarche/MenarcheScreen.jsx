import React from "react";
import Card from "../../components/Card/Card";
import CourseCard from "../../components/CourseCard/CourseCard";
import "./MenarcheScreen.css";

const MenarcheScreen = () => {
  return (
    <div className="container">
      <h1>Niña y Adolescente</h1>
      <p style={{ textAlign: "justify", padding: "2px 8px" }}>
        Las matronas podemos estar presentes en muchísimas áreas que no solo
        involucran el embarazo y nacimiento. Tenemos un rol fundamental en la
        educación para la salud sexual y afectiva de las mujeres, sus parejas,
        hijos e hijas, sus familias y la comunidad. La adolescencia, es un
        periodo de cambios que va desde los 10 a los 19 años. Según los
        programas ministeriales de salud, a partir de estas edades se realiza un
        control para ambos sexos. Si, es para todos y todas, no sólo niñas. En
        esta instancia se va estableciendo un vínculo con los y las
        adolescentes, se conversa, se les escucha, se identifican sus factores
        protectores y de riesgo, se evalúan las áreas familiar, social,
        sexualidad y su salud general. De ser necesario, se realiza un examen
        físico en compañía de su madre, padre u otro adulto acompañante. Se
        resuelven dudas y se les da orientación. Se trata de un control
        preventivo, es la continuidad de los controles de niño sano y se realiza
        anualmente para ir viendo los cambios en esta etapa. Las dudas más
        frecuentes son con relación al desarrollo sexual y como enfrentar la
        sexualidad en estas edades. En la medida que normalicemos estos temas,
        lograremos entender que la sexualidad es parte de los seres humanos
        desde siempre, conversando en familia, fomentando el autocuidado y el
        amor a nuestros cuerpos y diferencias con respeto hacia las
        diversidades,con instituciones educacionales y de salud que trabajen de
        la mano apoyando a las familias. De esta manera estaremos en el buen
        camino para formar y ver crecer a niños, niñas y adolescentes íntegros,
        con mayor autoestima y tolerancia, y, sobre todo, más felices.
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
