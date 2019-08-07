import React, { createContext, useState } from "react"

const AuthContext = createContext({
  loggedIn: false,
  login: () => {},
  logout: () => {},
})

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  const login = () => {
    setLoggedIn(true)
  }
  const logout = () => {
    setLoggedIn(false)
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
