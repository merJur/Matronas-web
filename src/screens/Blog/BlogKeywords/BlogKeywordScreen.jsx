import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchBlogs, getBlogs } from "../../../services/BlogServices";

const BlogKeywordScreen = () => {
  const { keyword } = useParams();
  const [blogs, setBlogs] = useState([]);

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
    return "No hay blogs";
  }

  return (
    <div>
      {blogs.map((blog) => (
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.keyWords}</p>
            <Link to={`/blog/${blog.id}`}> Entra al blog</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogKeywordScreen;
