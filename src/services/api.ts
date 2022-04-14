import axios from 'axios'

const token = localStorage.getItem('token')

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: token === null ? '' : `Bearer ${token}`
  }
})

export default api

//  const api = () => {
//   const instance = axios.create({
//     baseURL: 'http://localhost:3000/'
//   })

//   instance.interceptors.request.use(config => {
//     const token = localStorage.getItem('token')
//     if (token) {
//       config.headers.Authorization = token ? `Bearer ${token}` : ''
//     }

//     return config
//   })

//   instance.interceptors.response.use(
//     function (response) {
//       return response
//     },
//     function (error) {
//       if (error.response !== undefined)
//         if (error.response.status === 401) window.location.href = '/login'

//       return Promise.reject(error)
//     }
//   )
//   return instance
// }
