import React from "react";
import Card from "../../components/Card/Card";
import "./AboutUsScreen.css";

const AboutUs = () => {
  return (
    <div className="container">
      <img
        className="adminsPhoto"
        src="https://res.cloudinary.com/merjur/image/upload/v1667410614/matronas/rosa-elena_o6sjjj.jpg"
        alt="Elena Rivilla y Rosa Sánchez"
      />
      <p>
        Comadrona. Midwife, sage femme, partera,…MATRONA; eso somos. Las
        matronas, somos los profesionales sanitarios oficialmente reconocidos y
        preparados específicamente para acompañar a las mujeres en todo su ciclo
        vital. OM MATRONAS, nace en estos momentos de profundos cambios en la
        sociedad que nos lleva a plantearnos nuevas maneras de acompañar a las
        mujeres y sus familias; otras maneras de ser y estar. Todo en el
        universo está vibrando, en continuo movimiento y transformación, según
        las religiones dhármicas(como el hinduismo y el budismo), desde que
        sucedió por primera vez, una primera vibración cósmica, que originó el
        OM y dio lugar a todo el universo, considerándose por eso la sílaba
        sagrada, el sonido del que emergieron el resto de sonidos.
        Tradicionalmente en las clases de yoga, se entona el mantra OM 3 veces
        al inicio de la clase. Lo hacemos para invocar a ésa conciencia
        infinita, para que pueda guiarnos en nuestra práctica y nos otorgue la
        sabiduría de saber escucharnos, de saber ajustar nuestra respiración y
        nuestro movimiento a cada propuesta, y de dar el paso a hacer lo mismo
        de la esterilla a la vida. Cuando lo cantamos, nos sintonizamos
        simbólica y físicamente a ese sonido, reconociendo nuestra conexión con
        todos los seres vivos del universo y con el origen de la vida y nuestra
        naturaleza. Por eso Patanjali dice que “OM es el camino hacia uno mismo,
        hacia lo más profundo de nuestro ser”. Y por eso, el mantra OM forma
        parte de nuestro nombre, por el significado que cobra para nosotras,
        Matronas yoguinis, todo su simbolismo. Por significar un nuevo comienzo,
        por significar el reconocimiento de lo que somos y de dónde venimos, por
        significar la escucha y el acompañamiento sin juicios. Y porque como
        pasa al cantar el OM desde el corazón, queremos acompañarte mujer, en
        ese camino de conexión con lo más profundo de tu ser.
      </p>
      <title>¿Qué ofrecemos?</title>
      <p>
        Queremos acompañarte a ti mujer en todo tu ciclo vital. Y es que, la
        transcendencia de nuestra labor va desde el acompañamiento en el
        embarazo, el parto y la crianza; hasta brindarles atención integral en
        materia de salud sexual y reproductiva en todas sus etapas. Por ello,
        ofrecemos servicios que cubren todas estas esferas vitales desde la
        infancia, para recibir vuestra primera luna hasta la llegada de la
        madurez cíclica, pasando,cómo no, por la maravillosa etapa de recibir a
        vuestras hijas e hijos.
      </p>
      <div className="cards-container">
        <Card
          image="https://res.cloudinary.com/merjur/image/upload/v1667410188/matronas/Elena_nfs7uq.jpg"
          title="Elena Rivilla Lizano"
          description="
                Enfermera especialista obstétrico-ginecológica (matrona).
                Asesora de Lactancia materna.
                Instructora certificada Hatha Yoga
                Instructora de esferodinamia aplicada al embarazo y al parto
                "
        />

        <Card
          image="https://res.cloudinary.com/merjur/image/upload/v1667410184/matronas/Rosa_fil5fs.jpg"
          title="Rosa Mª Sánchez Molina"
          description="
                Enfermera especialista obstétrico-ginecológica (matrona).
                Asesora de Lactancia Materna.
                Instructora certificada Hatha Yoga (escuela internacional de yoga).
                Instructora de esferodinamia aplicada al embarazo y al parto.
                Profesional certificada de hipnoparto (Método Naces y Método Parto Postitivo).
                Anatomía para el movimiento y enseñanzas para cursos de preparación al nacimiento.
                Formación canto prenatal y voz en el parto.
                Educadora certificada de masaje infantil y Baby Led Weaning.
                "
        />
      </div>
    </div>
  );
};

export default AboutUs;
