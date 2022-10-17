import http from './BaseService'

export const getBlog = () => http.get('/blogs')
export const getBlogDetail = (id) => http.get(`/blogs/${id}`).then((res) => res)
export const createBlog = (body) => http.post('/blogs', body).then((res)=> res)
export const updateBlog = (id, body) => http.patch(`/blogs/${id}`, body).then((res)=> res)
export const deleteBlog = (id) => http.delete(`/blogs/${id}`).then((res)=> res)