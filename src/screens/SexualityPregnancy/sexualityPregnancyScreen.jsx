import React from "react";
import "./sexualityPregnancyScreen.css";

const sexualityPregnancyScreen = () => {
  return (
    <div className="img-container-pregnancy">
      <img
        src="https://res.cloudinary.com/merjur/image/upload/v1667844734/matronas/4366325_khufj6.jpg"
        alt="tribu-tribu"
      />

      <h1>SEXUALIDAD EN EL EMBARAZO</h1>

      <p className="text-pregnancy" style={{ textAlign: "center" }}>
        Sabemos que la sexualidad durante el embarazo suele ser menos frecuente
        y menos satisfactoria que cuando no estamos embarazadas.
        <br />
        <br />
        En general existe el miedo a "hacer daño a la criatura" y una percepción
        diferente tanto de nosotras como de nuestra pareja.
        <br />
        <br />
        Ahora que estás embarazada es posible que sientas más ganas de tener
        relaciones sexuales o todo lo contrario, no querer tenerlas en absoluto.
        <br />
        <br />
        Ambas situaciones son normales y no debes preocuparte.
        <br />
        <br />
        Escucha a tu cuerpo y habla con tu pareja de tus dudas y tus miedos.
        <br />
        <br />
        Descubrirás que no eres la única que, de repente, ve el sexo de otra
        manera.
        <br />
        <br />
        Por eso es fundamental la comunicación en la pareja, siempre, pero quizá
        aún más especialmente durante el embarazo y el puerperio.
      </p>

      <h2>
        <strong>¿Y si algo va mal en el embarazo?</strong>
      </h2>
      <p className="text-something-wrong" style={{ textAlign: "center" }}>
        La sexualidad forma parte de nuestras vidas, también durante el
        embarazo. <br />
        Hay ciertas circunstancias en las que suele recomendarse{" "}
        <strong>NO</strong> mantener relaciones sexuales con penetración:
        <br />
        <br />
        <div>
          <ul style={{ textAlign: "justify" }}>
            <li>amenaza de aborto.</li>
            <br />
            <li>amenaza de parto prematuro.</li>
            <br />
            <li>placenta previa con sangrado al final del embarazo.</li>
            <br />
          </ul>
        </div>
        <br />
        <p>
          En estos casos, el especialista debería detallar qué actividades
          sexuales concretas son seguras y cuáles no. Por ejemplo, aun en estos
          supuestos se considera no solo inocua, sino incluso beneficiosa para
          la embarazada, la realización de masaje perineal, que puede hacerse en
          pareja. Como hemos dicho, la sexualidad es mucho más que la
          genitalidad, quizá es el momento de encontrar otras maneras de
          disfrutar juntos, más allá del sexo coital.
        </p>
      </p>
    </div>
  );
};

export default sexualityPregnancyScreen;
