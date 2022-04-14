import api from 'services/api'
import { Login } from './authSlice'

const login = async (userData: Login) => {
  const { data } = await api.post('/users/signin', userData)

  if (data) {
    localStorage.setItem('user', JSON.stringify({ ...data?.user }))
    localStorage.setItem('token', data?.jwtToken)
  }

  return data
}

const updateProfile = async (userData: any) => {
  const { data } = await api.patch('/users/update', userData)

  localStorage.setItem('user', JSON.stringify({ ...data }))

  return { ...data }
}

const logout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}

const authService = {
  login,
  updateProfile,
  logout
}

export default authService
