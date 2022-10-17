import createHttp from './BaseService'

const http = createHttp(true)

export const getCurrentUser = () => http.get('/users')
export const getUserDetail = (id) => http.get(`/users/${id}`).then((res) => res)
export const createUser = (body) => http.post('/users', body).then((res)=> res)
export const updateUser = (id, body) => http.patch(`/users/${id}`, body).then((res)=> res)
export const deleteUser = (id) => http.delete(`/users/${id}`).then((res)=> res)