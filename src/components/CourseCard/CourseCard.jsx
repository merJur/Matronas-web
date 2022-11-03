import React from 'react';
import './CourseCard.css'

const CourseCard = (props) => {
    const {  name, image, typeOfCourse, description, schedule, hours, price } = props
    return (
        <div>
            <div className='course-card-column'>
                <h2 className='course-card-name'>{name}</h2>
                <s>{typeOfCourse}</s>
            </div>
            <div className='course-card-row'>
                <img src={image} alt={name} className='course-card-image' />
                <p>{description}</p>
                <div className='course-card-row-s'>
                    <s className='course-card-s'>{schedule}</s>
                    <s className='course-card-s'>{hours}</s>
                    <s className='course-card-s'>{price}</s>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
