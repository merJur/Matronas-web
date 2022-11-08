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

      <p
        className="text-teenagers"
        style={{ textAlign: "center" }}
      >
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

      {/* <Card
        image="https://res.cloudinary.com/merjur/image/upload/v1667411747/matronas/teenager_gs2ngu.png"
        title="TALLER SEXUALIDAD EN LA ADOLESCENCIA."
        description="
                La educación sexual es un elemento de la educación en general, que busca cumplir con un objetivo de carácter formativo, creando en el individuo, sea niño, joven o adulto, una serie de actitudes, valores y comportamientos ante su propio cuerpo, hacia la realidad de su sexo, así como de su rol actual y futuro. 
                De ahí que educar sexualmente implique completar el desarrollo integral del individuo, evitando que se forme una imagen distorsionada, negativa o falsa sobre el sexo y su sexualidad, contribuyendo así a evitar futuros problemas relacionados con este aspecto, así como una forma de sensibilizar y prevenir la violencia de género.
                "
      /> */}

      <CourseCard
        name="TALLER SEXUALIDAD EN LA ADOLESCENCIA."
        image="https://res.cloudinary.com/merjur/image/upload/v1667411747/matronas/teenager_gs2ngu.png"
        typeOfCourse="Presencial"
        description="La educación sexual es un elemento de la educación en general, que busca cumplir con un objetivo de carácter formativo, creando en el individuo, sea niño, joven o adulto, una serie de actitudes, valores y comportamientos ante su propio cuerpo, hacia la realidad de su sexo, así como de su rol actual y futuro. 
          De ahí que educar sexualmente implique completar el desarrollo integral del individuo, evitando que se forme una imagen distorsionada, negativa o falsa sobre el sexo y su sexualidad, contribuyendo así a evitar futuros problemas relacionados con este aspecto, así como una forma de sensibilizar y prevenir la violencia de género.
           
          Aenean at est nec est vehicula gravida. Curabitur eu massa augue. Sed odio nisl, commodo vitae ultricies quis, pharetra aliquet metus. Praesent pretium, metus in tempus ultrices, mauris dui pretium magna, volutpat blandit ipsum odio a arcu. Aliquam a enim risus. Sed quis vulputate turpis, a luctus tellus. Maecenas interdum odio a justo mattis tincidunt. Mauris ultrices ex vel mauris ultrices scelerisque. Vestibulum ac dignissim magna. Aliquam mollis nulla sed nibh maximus placerat. Vestibulum dapibus molestie scelerisque. Aliquam euismod mattis eros non vulputate. Donec tellus purus, cursus malesuada tempus in, maximus et mi. Fusce dapibus a sem non sagittis. Donec tristique ullamcorper commodo. Duis laoreet fringilla rutrum."
        schedule="25 de noviembre de 2022"
        hours="18:00h"
        price="15€"
      />

      <CourseCard
        name="COMUNICACIÓN FAMILIAR SOBRE LA SEXUALIDAD"
        image="https://res.cloudinary.com/merjur/image/upload/v1667411747/matronas/teenager_gs2ngu.png"
        typeOfCourse="Presencial"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis dui non mauris tincidunt egestas. Aenean consequat ex velit, ut malesuada magna molestie ac. Donec tincidunt velit nec leo suscipit tempor. Pellentesque libero leo, euismod ut nibh vel, laoreet eleifend ante. Maecenas tristique hendrerit lorem, vel ultrices orci vulputate et. Maecenas feugiat non diam sit amet efficitur. Pellentesque mattis nec lectus eu mollis. In congue ultrices lectus nec mollis. Proin cursus aliquet nulla vitae tincidunt. Sed congue et velit ac sollicitudin.
           
          Aenean at est nec est vehicula gravida. Curabitur eu massa augue. Sed odio nisl, commodo vitae ultricies quis, pharetra aliquet metus. Praesent pretium, metus in tempus ultrices, mauris dui pretium magna, volutpat blandit ipsum odio a arcu. Aliquam a enim risus. Sed quis vulputate turpis, a luctus tellus. Maecenas interdum odio a justo mattis tincidunt. Mauris ultrices ex vel mauris ultrices scelerisque. Vestibulum ac dignissim magna. Aliquam mollis nulla sed nibh maximus placerat. Vestibulum dapibus molestie scelerisque. Aliquam euismod mattis eros non vulputate. Donec tellus purus, cursus malesuada tempus in, maximus et mi. Fusce dapibus a sem non sagittis. Donec tristique ullamcorper commodo. Duis laoreet fringilla rutrum."
        schedule="23 de noviembre de 2022"
        hours="18:00h"
        price="15€"
      />
    </div>
  );
};

export default teenagerSexualityScreen;
