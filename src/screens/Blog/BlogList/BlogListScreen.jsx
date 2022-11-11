import "./BlogListScreen.css";
import { getBlogs, deleteBlog } from "../../../services/BlogServices";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "./../../../context/AuthContext";
import { confirmAlert } from 'react-confirm-alert';

const BlogListScreen = () => {
  const [blogs, setBlogs] = useState([]);
  const { user } = useAuthContext();

  const fetchBlogs = useCallback(() => {
    getBlogs().then((blogsData) => {
      setBlogs(blogsData);
    });
  }, []);

  const handleDeleteBlog = (id) => {
    deleteBlog(id).then((deletedBlog) => {
      fetchBlogs();
    });
  };
  

  const handleDelete = (id) => {
    confirmAlert({
      title: 'Confirmación',
      message: '¿Estás seguro que quieres borrar?',
      buttons: [
        {
          label: 'Si',
          onClick: (ev) => handleDeleteBlog(id)
        },
        {
          label: 'No',
          onClick: (ev) => console.log('NO')
        }
    ]
    })
   
   
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
              <h4 className="blog-card-title-blogList">
                <strong>{blog.title}</strong>
              </h4>

              <div className="blog-card-direction">
                <div>
                  <div className="blog-card-keyWords-span">
                    {blog.keyWords.map((keyword) => (
                      <span className="blog-keyWords" key={keyword}>
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to={`/blog/${blog.id}`} className="blog-link ">
                  Ver detalles
                </Link>
              </div>
              {{ ...user }.isAdmin ? (
                <div className="row-btn-admin">
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
