import createHttp from './BaseService'

const http = createHttp(true)

export const getCurrentUser = () => http.get('/users/me')
export const getUserDetail = (id) => http.get(`/users/${id}`)
export const createUser = (body) => http.post('/users', body)
export const updateUser = (id, body) => http.patch(`/users/${id}`, body)
export const deleteUser = (id) => http.delete(`/users/${id}`)