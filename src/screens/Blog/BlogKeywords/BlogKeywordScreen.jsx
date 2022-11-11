import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchBlogs, getBlogs } from "../../../services/BlogServices";
import './blogKeywordScreen.css'

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
    return navigate("/*");
  }

  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <div
              className="blog-container  "
              style={{ 
                marginBottom: '2rem',
                backgroundImage: `url(${blog.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: " center center",
              }}
            >
              <h2 className="blog-card-title-keywords">{blog.title}</h2>
              <div className="blog-card-direction">
                <p className="blog-card-keyWords-span">
                  {blog.keyWords.map((keyword) => (
                    <span className="blog-keyWords" key={keyword}>
                      {keyword}
                    </span>
                  ))}
                </p>
                <Link
                  className="link-mobile"
                  to={`/blog/${blog.id}`}
                >
                  Entra al blog
                </Link>
              </div>
            </div>
          </li>
        ))}
        <div className="footer-down"></div>
      </ul>
    </div>
  );
};

export default BlogKeywordScreen;
