import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css'
import { useAuthContext } from "../../context/AuthContext";
import { deleteBlog } from '../../services/BlogServices';
import { getBlogs } from './../../services/BlogServices';
 

const BlogCard = (props) => {
    const { id, title, image, keyWords, post, to, isAdmin } = props

    
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
        
        <div className='blog-card-container ' style={{backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", backgroundPosition:' center center' }}>
            <h2 className='blog-card-title'>{title}</h2>
            <div className='blog-card-direction'>
                {/* <img src={image} alt={title} className='blog-card-img'/> */}
                <p className='blog-card-keyWords'><strong>Palabras clave: </strong>{keyWords}</p>
                <Link to={to} className='blog-card-link'>Ir al detalle</Link>
            </div>
            {isAdmin ? (
        <div>
          <Link className="link-unstyled me-3" to={`/course/${id}/update`}>
            <span className="badge badge-primary bg-primary badge-pill">
              Editar
            </span>
          </Link>
          <i
            onClick={() => handleDelete(id)}
            className="btn badge badge-danger text-light bg-danger badge-pill"
            type={"btn"}
          >
            Borrar
          </i>
        </div>
      ) : null}
        </div>
        );
};

export default BlogCard;