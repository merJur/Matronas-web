import './BlogListScreen.css'
import { getBlog } from '../../../services/BlogServices'
import React, { useState, useEffect } from 'react';

const BlogListScreen = () => {
    const [ blogs, setBlogs ] = useState([])
    useEffect(() => {
        getBlog()
        .then(blogsData => {
            setBlogs(blogsData)
        } )
    }, [])

    return (
        <div>
            <ul className='list-group container mt-4'>
                {blogs.map((blog)=> (
                    <li key={blog.id} >
                        <p>{blog.title}</p>
                        <p>{blog.prof.name}</p>

                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default 
BlogListScreen;