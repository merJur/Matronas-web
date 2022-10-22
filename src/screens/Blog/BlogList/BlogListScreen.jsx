import "./BlogListScreen.css";
import { getBlog, deleteBlog } from "../../../services/BlogServices";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "./../../../context/AuthContext";

const BlogListScreen = () => {
  const [blogs, setBlogs] = useState([]);
  const { user } = useAuthContext();

  const handleDelete = (id) => {
    deleteBlog(id).then((deletedBlog) => {
      const newBlogs = blogs.filter((blog) => blog.id !== deletedBlog.id);
      setBlogs(newBlogs);
    });
  };
  useEffect(() => {
    getBlog().then((blogsData) => {
      setBlogs(blogsData);
    });
  }, []);

  return (
    <div>
      <ul className="list-group container mt-4">
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>See details</Link>

            <p>{blog.title}</p>
            <p>{blog.keyWords}</p>
            {user.isAdmin ? (
              <div>
                <Link
                  className="link-unstyled me-3"
                  to={`/blog/${blog.id}/update`}
                >
                  <span className="badge badge-primary bg-primary badge-pill">
                    Edit
                  </span>
                </Link>
                <i
                  onClick={() => handleDelete(blog.id)}
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

export default BlogListScreen;
