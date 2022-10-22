import React, { useState, useEffect } from 'react';
import { getCourse, deleteCourse } from './../../../services/CourseServices';
import { Link } from "react-router-dom";
import { useAuthContext } from "./../../../context/AuthContext";

const CourseListScreen = () => {
    const refresh = () => {
        getCourse().then((courses) => {
          setCourses(courses);
        });
      };
      const [courses, setCourses] = useState([], refresh());
      const { user } = useAuthContext();
    
      const handleDelete = (id) => {
        deleteCourse(id).then((deletedCourse) => {
          const newCourses = courses.filter((course) => course.id !== deletedCourse.id);
          setCourses(newCourses);
        });
      };
      useEffect(() => {
        getCourse().then((course) => {
          setCourses(course);
        });
      }, []);
    return (
        <div>
            <ul className="list-group container mt-4">
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>See details</Link>

            <p>{course.name}</p>
            <p>{course.typeOfCourse}</p>
            <p>{course.description}</p>
            <p>{course.price}</p>
            {user.isAdmin ? (
              <div>
                <Link
                  className="link-unstyled me-3"
                  to={`/course/${course.id}/update`}
                >
                  <span className="badge badge-primary bg-primary badge-pill">
                    Edit
                  </span>
                </Link>
                <i
                  onClick={() => handleDelete(course.id)}
                  className="btn badge badge-danger text-light bg-danger badge-pill"
                  type={"btn"}
                >
                  Delete
                </i>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
        </div>
    );
};

export default CourseListScreen;