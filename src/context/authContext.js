import React, { createContext, useState } from "react"
import setLocalStorage from "../utils/setLocalStorage"
import clearLocalStorage from "../utils/clearLocalStorage"
import apiLogin from "../utils/apiLogin"

const AuthContext = createContext({
  loggedIn: false,
  login: () => {},
  logout: () => {},
})

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(localStorage.user ? true : false)

  const login = async (email, password) => {
    const response = await apiLogin(email, password)
    setLocalStorage(response)
    setLoggedIn(true)
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

export default AuthProvider
export { AuthContext }
