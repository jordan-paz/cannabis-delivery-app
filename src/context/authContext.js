import React, { createContext, useState } from "react"
import setLocalStorage from "../utils/setLocalStorage"
import clearLocalStorage from "../utils/clearLocalStorage"
import api from "../utils/api"

const AuthContext = createContext({
  loggedIn: false,
  login: () => {},
  logout: () => {},
  loading: false,
})

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(localStorage.user ? true : false)
  const [loading, setLoading] = useState(false)

  const login = (email, password) => {
    setLoading(true)
    api.login(email, password).then(data => {
      setLocalStorage(data)
      setLoggedIn(true)
      setLoading(false)
      window.history.back()
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
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
export { AuthProvider }
