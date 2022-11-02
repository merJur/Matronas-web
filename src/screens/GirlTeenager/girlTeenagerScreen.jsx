import React from "react";
import Card from "../../components/Card/Card";
import "./girlTeenagerScreen.css";

const girlTeenagerScreen = () => {
  return (
    <div className="container">
      <h1>Niña y Adolescente</h1>
      <p>
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
      <div className="cards-container">
        <Card
          image="https://res.cloudinary.com/merjur/image/upload/v1667411763/matronas/girl_hndqu8.png"
          title="TALLER MENARQUIA. PRIMERA MENSTRUACIÓN."
          description="
            Hablaremos sobre cambios físicos y emocionales en la pubertad. 
            ¿Qué deben saber las niñas antes de la primera menstruación?.
            ¿Cómo hablar de menstruación sin transmitir miedos, estereotipos e informaciones que generen confusión?.
            La importancia de los referentes femeninos en este periodo de la vida. 
            Las competencias que se deben desarrollar en esta época para un adecuado desarrollo de la sexualidad.
                "
        />

        <Card
          image="https://res.cloudinary.com/merjur/image/upload/v1667411747/matronas/teenager_gs2ngu.png"
          title="TALLER SEXUALIDAD EN LA ADOLESCENCIA."
          description="
                La educación sexual es un elemento de la educación en general, que busca cumplir con un objetivo de carácter formativo, creando en el individuo, sea niño, joven o adulto, una serie de actitudes, valores y comportamientos ante su propio cuerpo, hacia la realidad de su sexo, así como de su rol actual y futuro. 
                De ahí que educar sexualmente implique completar el desarrollo integral del individuo, evitando que se forme una imagen distorsionada, negativa o falsa sobre el sexo y su sexualidad, contribuyendo así a evitar futuros problemas relacionados con este aspecto, así como una forma de sensibilizar y prevenir la violencia de género.
                "
        />
      </div>
    </div>
  );
};

export default girlTeenagerScreen;
