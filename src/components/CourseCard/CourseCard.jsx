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
    <div style={{ backgroundColor: "pink" }}>
      <div className="course-card-column">
        <h2 className="course-card-name">{name}</h2>
        <s style={{ textDecoration: "none" }}>{typeOfCourse}</s>
      </div>
      <div className="course-card-row">
        <img src={image} alt={name} className="course-card-image" />
        <p>{description}</p>
      </div>
      <div className="course-card-row-s">
        <s className="course-card-s">{schedule}</s>
        <s className="course-card-s">{hours}</s>
        <s className="course-card-s">{price}</s>
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
