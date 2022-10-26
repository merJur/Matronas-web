import React, {useState, useEffect} from 'react';
import { getCourseDetail } from '../../../services/CourseServices';
import { useParams } from 'react-router-dom';

const CourseDetailScreen = () => {
    const {id} = useParams()
    const [course, setCourse] = useState([])

    useEffect(() => {
        getCourseDetail(id).then(course => setCourse(course)).catch(err => console.log(err))

    }, [])
    return (
        <div>
            <h2>{course.name}</h2>
            {/*image*/}
            <div>
                <p>{course.typeOfCourse}</p>
                <p>{course.description}</p>
                <p>{course.schedule}</p>
                <p>{course.hours}</p>
                <p>{course.price}</p>
            </div>
            
        </div>
    );
};

export default CourseDetailScreen;