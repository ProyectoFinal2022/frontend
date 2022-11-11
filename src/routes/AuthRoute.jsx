import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from '../context/AuthContext'

export const AuthRoute = ({ children }) => {
  const { user } = useContext(AuthContext)

  return user.isLogged ? <Navigate to="/profile" /> : children
}
