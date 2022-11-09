import "./BlogListScreen.css";
import { getBlogs, deleteBlog } from "../../../services/BlogServices";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "./../../../context/AuthContext";

const BlogListScreen = () => {
  const [blogs, setBlogs] = useState([]);
  const { user } = useAuthContext();

  const fetchBlogs = useCallback(() => {
    getBlogs().then((blogsData) => {
      setBlogs(blogsData);
    });
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id).then((deletedBlog) => {
      fetchBlogs();
    });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.name}>
            <div
              className="blog-container "
              style={{
                backgroundImage: `url(${blog.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: " center center",
              }}
            >
              <h2 className="blog-card-title-blogList"><strong>{blog.title}</strong></h2>

              <div className="blog-card-direction">
                <p className="blog-card-keyWords-span">
                  {/* <strong>Palabras clave: </strong> */}
                  {blog.keyWords.map((keyword) => (
                    <span className="blog-keyWords" key={keyword}>
                      {keyword}
                    </span>
                  ))}
                </p>
                <Link to={`/blog/${blog.id}`} className="blog-link ">
                  Ver detalles
                </Link>
              </div>
              {{...user}.isAdmin ? (
                <div>
                  <Link
                    className="link-unstyled me-3"
                    to={`/blog/${blog.id}/update`}
                  >
                    <span className="btn btns-course">Editar</span>
                  </Link>
                  <i
                    onClick={() => handleDelete(blog.id)}
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

export default BlogListScreen;
