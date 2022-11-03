import "./BlogListScreen.css";
import { getBlogs, deleteBlog } from "../../../services/BlogServices";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "./../../../context/AuthContext";
import BlogCard from "../../../components/BlogCard/BlogCard";

const BlogListScreen = () => {
  const [blogs, setBlogs] = useState([]);
  const { user } = useAuthContext();

  const fetchBlogs = useCallback(() => {
    getBlogs()
    .then((blogsData) => {
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
      
        {blogs.map((blog) => (
          <div key={blog.id}>

          <BlogCard 
            title={blog.title}
            image={blog.image}
            keyWords={blog.keyWords}
            to={`/blog/${blog.id}`}
            />
          </div>

          // <li key={blog.id}>
          //   <Link to={`/blog/${blog.id}`}>Ver detalles</Link>

          //   <p>{blog.title}</p>
          //   <p>{blog.keyWords}</p>
          //   {user.isAdmin ? (
          //     <div>
          //       <Link
          //         className="link-unstyled me-3"
          //         to={`/blog/${blog.id}/update`}
          //       >
          //         <span className="badge badge-primary bg-primary badge-pill">
          //           Editar
          //         </span>
          //       </Link>
          //       <i
          //         onClick={() => handleDelete(blog.id)}
          //         className="btn badge badge-danger text-light bg-danger badge-pill"
          //         type={"btn"}
          //       >
          //         Borrar
          //       </i>
          //     </div>
          //   ) : null}
          //    </li>
        ))}
      
    </div>
  );
};

export default BlogListScreen;
