import { Navigate, Outlet } from 'react-router-dom'
import { RootStateOrAny, useSelector } from 'react-redux'

const PrivateRoute = () => {
  const { token } = useSelector((state: RootStateOrAny) => state.auth)

  return token ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
