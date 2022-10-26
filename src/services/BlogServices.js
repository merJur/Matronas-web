import createHttp from './BaseService'

const httpAuthenticated = createHttp(true)
const httpUnathenticated = createHttp(false)

export const getBlogs = () => httpUnathenticated.get('/blogs')
export const searchBlogs = (keyword) => httpUnathenticated.get(`/blogs/search/${keyword}`)
export const getBlogDetail = (id) => httpUnathenticated.get(`/blogs/${id}`)
export const createBlog = (body) => httpAuthenticated.post('/blogs', body)
export const updateBlog = (id, body) => httpAuthenticated.patch(`/blogs/${id}`, body)
export const deleteBlog = (id) => httpAuthenticated.delete(`/blogs/${id}`)