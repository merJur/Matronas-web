import React from "react";
import { Link } from "react-router-dom";
import "./fertilityScreen.css";

const fertilityScreen = () => {
  return (
    <div className="container">
      <h1>FERTILIDAD EN LA MUJER Y SUS ETAPAS.</h1>
      <p>
        Esta etapa dura menos de 30 años, y estas son las tres décadas en que
        las mujeres que pueden ser madres. A partir de los 14 la mayoría de
        mujeres ya han empezado a ovular y a partir de los 44 las posibilidades
        biológicas de ser madre son muy bajas. Esto no significa que sea
        imposible quedarse embarazada a partir de esta edad, pero sí que la
        probabilidad de éxito es mucho menor. La época fértil femenina la
        podemos dividir en 5 etapas. Inicio a los 14 años. El organismo de cada
        niña evoluciona a un ritmo diferente, pero a esta edad la mayoría ya han
        vivido la primera menstruación, momento en el que empiezan a ovular.
        Después de 7 años, la mujer inicia su etapa más fértil, en la que el
        organismo está en mejores condiciones para quedarse embarazada. Esta
        segunda fase dura hasta los 30, cuando la fertilidad empieza a decaer y
        poco a poco, con el paso de los años, cada vez es más complicado
        conseguir ser madre debido a la evolución biológica del organismo. En la
        sociedad que vivimos actualmente, durante esta etapa de 9 años el hecho
        de ser madre no se encuentra entre las prioridades de la mayoría de las
        mujeres. Es una etapa en la que las mujeres se encuentran en plena
        formación académica y posteriormente iniciando su camino laboral, con
        unas preferencias sociales lejos de las responsabilidades que implica
        formar una familia. Así, sin darse cuenta, a menudo se encuentran que
        cuando empiezan a valorar la opción de quedarse embarazada, las
        dificultades aumentan debido a la progresiva disminución de la
        fertilidad con el paso de los años. A los 37 años la fertilidad de la
        mujer decrece aceleradamente hasta los 44, edad en la que las
        posibilidades biológicas de ser madres son muy bajas. A partir de esta
        edad siempre se recomienda evaluar la reserva ovárica realizando una
        ecografía transvaginal durante los primeros días de ciclo, con recuento
        de Folículos Antrales (RFA), y una determinación analítica de la Hormona
        Antimuleriana (AMH), que se puede realizar en cualquier momento del
        ciclo ovárico. Otros parámetros analíticos a tener en cuenta son las
        hormonas basales (FSH, LH y estradiol) realizadas en el segundo o tercer
        día de la menstruación. En definitiva se trata de prepararse para la
        maternidad, especialmente cuando la decisión se toma a una edad más
        avanzada.
      </p>

     <Link className="btn btns-admin" to="#" role="button">Píncha aqui</Link>
     </div>
  );
};

export default fertilityScreen;
