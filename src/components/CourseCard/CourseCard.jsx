import React, { useState, useEffect, useCallback } from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { getCourses, deleteCourse } from "./../../services/CourseServices";

const CourseCard = (props) => {
  const {
    id,
    name,
    image,
    typeOfCourse,
    description,
    schedule,
    hours,
    price,
    isAdmin,
  } = props;

  const [courses, setCourses] = useState([]);
  
  const fetchCourses = useCallback(() => {
    getCourses().then((course) => {
      setCourses(course);
    });
  }, []);

  const handleDelete = (id) => {
    deleteCourse(id).then((deletedCourse) => {
      fetchCourses();
    });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div style={{ borderRadius:'15px', width:'80%', margin:'3rem auto' }}>
      <div className="course-card-column">
        <h2 className="course-card-name">{name}</h2>
        <s style={{ textDecoration: "none" }}>{typeOfCourse}</s>
      </div>
      <div className="course-card-row">
        <img src={image} alt={name} className="course-card-image" />
        <p className="p-description">{description}</p>
      </div>
      <div className="course-card-row-s">
        <p className="course-card-s">{schedule}</p>
        <p className="course-card-s">{hours}</p>
        <p className="course-card-s">{price}</p>
      </div>
      {isAdmin ? (
        <div>
          <Link className="link-unstyled me-3" to={`/course/${id}/update`}>
            <span className="badge badge-primary bg-primary badge-pill">
              Editar
            </span>
          </Link>
          <i
            onClick={() => handleDelete(id)}
            className="btn badge badge-danger text-light bg-danger badge-pill"
            type={"btn"}
          >
            Borrar
          </i>
        </div>
      ) : null}
    </div>
  );
};

export default CourseCard;
