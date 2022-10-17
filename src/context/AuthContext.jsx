import { createContext, useState, useContext, useEffect } from 'react'
import { setToken, getAccessToken, logout } from '../store/AccessTokenStore'
import { verifyJWT } from '../helpers/jwtHelper'
import { getUserDetail } from '../services/UserServices'




const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState()

  const login = (token) => {
    setToken(token)

    getUserDetail()
  }

  const getUserDetail = (cb) => {
    getUserDetail()
      .then(user => {
        setUser(user)

        // cb && cb() Callback por si queremos hacer algo justo al traernos el usuario
      })
  }

  useEffect(() => {
    // Si existe token, me traigo al usuario

    if (getAccessToken()) {
      if (!verifyJWT(getAccessToken())) {
        logout()
      } else {
        //getUserDetail()
      }
    }
  }, [])

  const value = {
    user,
    login,
    getUserDetail
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext