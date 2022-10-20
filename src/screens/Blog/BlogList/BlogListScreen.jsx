import './BlogListScreen.css'
import { getBlog } from '../../../services/BlogServices'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogListScreen = () => {
    const [ blogs, setBlogs ] = useState([])
    useEffect(() => {
        getBlog()
        .then(blogsData => {
            setBlogs(blogsData)
        } )
    }, [blogs])

    return (
        <div>
            <ul className='list-group container mt-4'>
                {blogs.map((blog)=> (
                    <li key={blog.id}  >

                        <Link to={`/blog/${blog.id}`}>See details</Link>
                       
                        <p>{blog.title}</p>
                        <p>{blog.keyWords}</p>
                    

                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default BlogListScreen;