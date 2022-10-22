import './BlogFormScreen.css';
import  React, { useState } from 'react';
import { createBlog } from '../../../services/BlogServices'
import { useNavigate } from 'react-router-dom';




const BlogFormScreen = () => {
     const [blog, setBlog] = useState({
        title: "",
        prof: '',
        image: '',
        keyWords: '',
        post: ''
     })
     
     const navigate = useNavigate();

     const onSubmit = (event) => {
        event.preventDefault()

        createBlog(blog).then((blog) => {
            console.log('entrada de blog creada...........', blog);
            navigate('/blogs') 
        })
     }

    return (
        <div>
           <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Entry your post!
                      </p>

                      <form
                        onSubmit={(event) => onSubmit(event)}
                        className="mx-1 mx-md-4"
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="title"
                              placeholder="Title"
                              className="form-control"
                              onChange={(event) =>
                                setBlog({ ...blog, title: event.target.value })
                              }
                              value={blog.name}
                            />
                          </div>
                        </div>
    
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="file"
                              name="image"
                              placeholder="Post´s image"
                              className="form-control"
                              onChange={(event) =>
                                setBlog({ ...blog, image: event.target.value })
                              }
                              value={blog.image}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                         <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="keyWords"
                              placeholder="Key words"
                              className="form-control"
                              onChange={(event) =>
                                setBlog({
                                  ...blog,
                                  keyWords: event.target.value,
                                })
                              }
                              value={blog.keyWords}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="textarea"
                              name="post"
                              placeholder="Enter the text of the post"
                              className="form-control"
                              onChange={(event) =>
                                setBlog({ ...blog, post: event.target.value })
                              }
                              value={blog.post}
                              style={{heigth:'5rem'}}
                            />
                          </div>
                        </div>

                        <div
                          className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                          style={{ width: "20rem" }}
                        >
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Post
                          </button>
                        </div>
                     
                      </form>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
        </div>
    );
};

export default BlogFormScreen;