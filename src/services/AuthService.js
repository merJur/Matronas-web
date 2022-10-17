import createHttp from './BaseService'

const http = createHttp(false)

export const login = (body) => http.post('/login', body)