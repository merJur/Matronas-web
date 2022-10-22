import createHttp from './BaseService'

const http = createHttp(false)

export const getCourse = () => http.get('/courses').then((res) => res)
export const getCourseDetail = (id) => http.get(`/courses/${id}`).then((res) => res)
export const createCourse = (body) => http.post('/courses', body).then((res)=> res)
export const updateCourse = (id, body) => http.patch(`/courses/${id}`, body).then((res)=> res)
export const deleteCourse = (id) => http.delete(`/courses/${id}`).then((res)=> res)