import React, { createContext, useState } from "react"
import setLocalStorage from "../utils/setLocalStorage"
import clearLocalStorage from "../utils/clearLocalStorage"
import api from "../utils/api"

const AuthContext = createContext({
  loggedIn: false,
  login: () => {},
  logout: () => {},
})

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(localStorage.user ? true : false)

  const login = (email, password) => {
    api.login(email, password).then(data => {
      setLocalStorage(data)
      setLoggedIn(true)
    })
  }

  const logout = () => {
    setLoggedIn(false)
    clearLocalStorage()
  }

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
export { AuthProvider }
