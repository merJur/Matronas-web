import axios from 'axios'

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

http.interceptors.response.use(
    function (response) {
        return response.data
    },
    function (error) {
        if (error?.response?.status === 401) {
            console.error('unanuthenticated, redirect to login'); //*****************este redirect habrá q hacerlo, no?  */
            //localStorage.clear();
            localStorage.removeItem('access_token')
            window.location.replace('/login');
        }
        return Promise.reject(error);
    }
); 

export default http