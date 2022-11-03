import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css'

const BlogCard = (props) => {
    const { title, image, keyWords, post, to } = props

   
    
    
    return (
        
        <div className='blog-card-container ' style={{backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", backgroundPosition:' center center' }}>
            <h2 className='blog-card-title'>{title}</h2>
            <div className='blog-card-direction'>
                {/* <img src={image} alt={title} className='blog-card-img'/> */}
                <p className='blog-card-keyWords'><strong>Palabras clave: </strong>{keyWords}</p>
                <Link to={to} className='blog-card-link'>Ir al detalle</Link>
            </div>
           
        </div>
        );
};

export default BlogCard;