import React from 'react';
import './HomeScreen.css'

const HomeScreen = () => {
    return (
        <div>
            <div>
                <img src='https://res.cloudinary.com/merjur/image/upload/v1667409072/matronas/home_z7cv1e.jpg' alt='picture-background' className='home-picture' />
            </div>
            <div>
                <h1 className='title-home'><img src='https://res.cloudinary.com/merjur/image/upload/v1667410033/matronas/OM_seniwq.png' alt='Om' className='om' />Om Matronas</h1>
            </div>
        </div>
    );
};

export default HomeScreen