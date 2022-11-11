import React from 'react';
import './MerIdo.css'

const MerIdo = () => {
    return (
        <div>
            <div className='background'>
                <h2 className='merido-Title'><strong><i> ~ Mer & Ido ~ </i></strong></h2>
                <div className="line"></div>
                <div className='merido-cards'>

                    <div className='merido-card-ind'>
                        <img src='https://res.cloudinary.com/merjur/image/upload/v1668123111/matronas/IMG_6193_ix5rcr.jpg' alt='IdoFForero-picture' className='card-picture-merido' />
                        <a href='https://www.linkedin.com/in/idoia-fdez-forero/' className='merido-anchor'>
                            <h3>Idoia Fernández Forero</h3>
                        </a>
                        <div className="line"></div>
                        <p className='merido-description'>
                            La <strong>Curiosidad Alegre</strong>😁 me hizo llegar al <strong>Desarrollo Web. </strong>
                            Un campo dónde seguir siendo creativa y resolutiva. <br/><br/>
                            Melómana , Letraherida y Cinéfila. <br/> 
                            Ah! Soy más de Spaghettis que de Macarrones.
                        </p>
                    </div>

                    <div className='merido-card'>
                        <img src='https://res.cloudinary.com/merjur/image/upload/v1668123111/matronas/IMG_6190_vmrlzd.jpg' alt='MerJurPer-picture' className='card-picture-merido' />
                        <a href='https://www.linkedin.com/in/idoia-fdez-forero/' className='merido-anchor'>
                            <h3>Mercedes Jurado Pérez</h3>
                        </a>
                        <div className="line"></div>
                        <p className='merido-description'> 
                            En búsqueda del cambio y la conciliación familiar comencé esta andadura...<br/>
                             ¿hasta dónde me llevará? <br/>
                             ... <br/> ¡estoy dispuesta a descubrilo! 😁<br/>
                             <small style={{fontSize:'12px'}}>(Y yo soy más de perro que de gato)</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MerIdo;