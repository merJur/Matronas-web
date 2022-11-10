import React, { useState, useEffect, useCallback } from "react";
import { getCourses, deleteCourse } from "./../../../services/CourseServices";
import { Link } from "react-router-dom";
import { useAuthContext } from "./../../../context/AuthContext";
import CourseCard from "../../../components/CourseCard/CourseCard";
import "./CourseListScreen.css";

const CourseListScreen = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useAuthContext();

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
    <div>
      <ul className="courses-list-row  ">
        {courses.map((course) => (
          <li key={course.id} className="course-container">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <img
                src={course.image}
                alt={course.name}
                className="course-card-image"
              />
              <div className="course-card-column">
                <h2 className="course-card-name">{course.name}</h2>
                <s style={{ textDecoration: "none" }}>{course.typeOfCourse}</s>
              </div>
              <div className="course-card-row">
                <p
                  style={{
                    textAlign: "justify",
                    padding: "2px 8px",
                    margin: "5% 2%",
                  }}
                >
                  {course.description}
                </p>
              </div>
              <div className="course-card-row-s">
                <s className="course-card-s">{course.schedule}</s>
                <s className="course-card-s">{course.hours}</s>
                <s className="course-card-s">{course.price}</s>
              </div>
              {/* <Link to={`/course/${course.id}`}>Ver detalles</Link> */}
              {{ ...user }.isAdmin ? (
                <div>
                  <Link
                    className="link-unstyled me-3"
                    to={`/course/${course.id}/update`}
                  >
                    <span
                      className=" btn btns-course"
                      style={{ width: "6rem !important" }}
                    >
                      Editar
                    </span>
                  </Link>
                  <i
                    onClick={() => handleDelete(course.id)}
                    className="btn btns-course"
                    type={"btn"}
                  >
                    Borrar
                  </i>
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListScreen;
