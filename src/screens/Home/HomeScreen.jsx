import React from 'react';
import { Card } from 'react-bootstrap';
import './HomeScreen.css'

const HomeScreen = () => {
    return (
        <div>
            <div className='matronas-img-home'>
                <img src='https://res.cloudinary.com/merjur/image/upload/v1667850884/matronas/3945946_livzgf.jpg' alt='om-matronas'/>            
            </div>

            <div>
                <h1 className='title-home'>
                <img src='https://res.cloudinary.com/merjur/image/upload/v1667410033/matronas/OM_seniwq.png' alt='Om' className='om' /> 
                Om Matronas 
                <img src='https://res.cloudinary.com/merjur/image/upload/v1667410033/matronas/OM_seniwq.png' alt='Om' className='om' />
                </h1>
                <h3 className='text-home'>
                        La <strong>vibración</strong> es <strong>movimiento</strong>,
                        la <strong>vibración</strong> es <strong>transformación</strong>,<br/>
                        todo en el <strong>Universo</strong> está en continuo
                        estado de <strong>vibración y expansión.</strong>
                </h3>
            </div>
                <div className='col-2'>
                    <div className='icons-container '>
                        <img className="icon" src="https://res.cloudinary.com/merjur/image/upload/v1667411763/matronas/girl_hndqu8.png" alt="niña"/> 
                        <img className="icon" src="https://res.cloudinary.com/merjur/image/upload/v1667411747/matronas/teenager_gs2ngu.png" alt="adolescente"/> 
                        <img className="icon" src="https://res.cloudinary.com/merjur/image/upload/v1667411772/matronas/women_zjzl1d.png" alt="mujer"/> 
                    </div>
                    <div className='icons-container'>
                        <img className="icon" src="https://res.cloudinary.com/merjur/image/upload/v1667411785/matronas/pregnancy_vef90j.png" alt="embarazo"/> 
                        <img className="icon" src="https://res.cloudinary.com/merjur/image/upload/v1667411828/matronas/postpartum_uptllo.png" alt="postparto"/> 
                        <img className="icon" src="https://res.cloudinary.com/merjur/image/upload/v1667411779/matronas/mature-women_vigzec.png" alt="menopausia"/> 
                    </div>
                </div>
        </div>
    );
};

export default HomeScreen;