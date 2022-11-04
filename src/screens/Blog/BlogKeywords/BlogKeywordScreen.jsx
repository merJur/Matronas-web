import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchBlogs, getBlogs } from "../../../services/BlogServices";

const BlogKeywordScreen = () => {
  const { keyword } = useParams();
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (keyword) {
      searchBlogs(keyword)
        .then((results) => {
          if (results.length) {
            setBlogs(results);
          }
        })
        .catch((e) => console.log(e));
    }
  }, [keyword]);

  if (!blogs) {
    return "not found";
    // navigate('/notFound');
  }

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <div
            className="course-container-keywords "
            style={{
              backgroundImage: `url(${blog.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: " center center",
            }}
          >
            <h2 className="blog-card-title">{blog.title}</h2>
            <div className="blog-card-direction">
              <p className="blog-card-keyWords">
                <strong>Palabras clave: </strong>
                {blog.keyWords}
              </p>
              <Link className="blog-list-link-keywords" to={`/blog/${blog.id}`}>
                Entra al blog
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogKeywordScreen;
