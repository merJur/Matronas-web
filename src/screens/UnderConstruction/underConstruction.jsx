import React from "react";
import "./underConstruction.css";

function UnderConstruction() {
  return (
    <div>
      <div className="img-container-UnderConstruction">
        <img
          src="https://res.cloudinary.com/merjur/image/upload/v1668123530/matronas/3675500_gq4gqq.jpg"
          alt="Under Construction Page"
        />
      </div>

      <div className="text-UnderConstruction">
        <h1 style={{ textAlign: "center" }}>Página en construcción ...</h1>
        <br />
        <div style={{ textAlign: "center" }}>
          <h5>
            <strong>¿Cuándo estará disponible?</strong>
          </h5>
          <p>
            ¡Pronto! <br />
            Puedes ponerte en contacto con nosotras en el 555-555-555
          </p>
        </div>
      </div>
    </div>
  );
}

export default UnderConstruction;
