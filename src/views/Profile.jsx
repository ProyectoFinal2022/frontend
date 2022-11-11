import { useContext } from 'react'
import { AuthContext } from './../context/AuthContext'

export const Profile = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className='row'>
      <center>
        <h1>Perfil del Usuario: { user.username }</h1>
      </center>
    </div>
  )
}
