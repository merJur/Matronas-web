import './BlogDetailScreen.css'
import React, {useState, useEffect} from 'react';
import { getBlogDetail } from '../../../services/BlogServices'
import { useParams } from 'react-router-dom';


const BlogDetailScreen = () => {
    const { id } = useParams()
    console.log(id);

    const [ blog, setBlogs ] = useState([])

    useEffect(() => {
        getBlogDetail(id).
        then(blog => setBlogs(blog))
        .catch(err => console.log(err))
    }, [id])



    return (
        <div>
            <div>
                <img className="img-container-blogList-1" src={blog.image} alt={blog.title}/>
                <h2 className='blog-detail-title'>{blog.title}</h2>
            </div>
            <div>
                <h3> <u>~ Palabras clave ~</u> </h3>
                {/* <p> {`${blog.keyWords}`} </p> */}
                <p style={{width:'90%'}}>
                    {blog.keyWords?.map((keyword) => ( 
                        <span className='blog-KeyWord' key={keyword}>
                            {keyword}
                        </span>
                        )
                     )}
                </p>
            </div>
            <div className='post-text-container'>
                <p >{blog.post}</p>
            </div>
        </div>
    );
};

export default BlogDetailScreen;

// <p>
//                     {blog.keyWords?.map((keyword) => ( 
//                         <span className='blog-KeyWords' key={keyword}>
//                             {keyword}
//                         </span>
//                         )
//                      )}
//                 </p>