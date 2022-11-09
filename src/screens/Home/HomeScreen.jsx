import React from 'react';
import './HomeScreen.css'

const HomeScreen = () => {
    return (
        <div>
            <div className='matronas-img'>
                <img src='' alt='om-matronas'/>            
            </div>

            <div className='home-picture'>
                <img src='https://res.cloudinary.com/merjur/image/upload/v1667409072/matronas/home_z7cv1e.jpg' alt='ilustración etapas' />
            </div>
            <div>
                <h1 className='title-home'><img src='https://res.cloudinary.com/merjur/image/upload/v1667410033/matronas/OM_seniwq.png' alt='Om' className='om' />Om Matronas</h1>
            </div>
        </div>
    );
};

export default HomeScreen