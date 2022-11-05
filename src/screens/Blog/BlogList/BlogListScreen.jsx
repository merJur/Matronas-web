import "./BlogListScreen.css";
import { getBlogs, deleteBlog } from "../../../services/BlogServices";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "./../../../context/AuthContext";
import BlogCard from "../../../components/BlogCard/BlogCard";

const BlogListScreen = () => {
  const [blogs, setBlogs] = useState([]);
  const { ...user } = useAuthContext();

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
          <li key={blog.id}>
            {/* <BlogCard 
            title={blog.title}
            image={blog.image}
            keyWords={blog.keyWords}
            to={`/blog/${blog.id}`}
            isAdmin={user.isAdmin}
            />
          </div> */}

            <div className='course-container ' style={{backgroundImage:`url(${blog.image})`, backgroundRepeat:"no-repeat", backgroundPosition:' center center' }}>
              <h2 className="blog-card-title">{blog.title}</h2>
              
              <div className='blog-card-direction'>
              <p className='blog-card-keyWords'><strong>Palabras clave: </strong>{blog.keyWords}</p>
                 <Link to={`/blog/${blog.id}`} className='blog-list-link '>Ver detalles</Link>
              </div>
              {user.isAdmin ? (
                <div>
                  <Link
                    className="link-unstyled me-3"
                    to={`/blog/${blog.id}/update`}
                  >
                    <span className="btn btns-course">
                      Editar
                    </span>
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
