import React, { createContext, useState, useEffect } from "react"

const AuthContext = createContext({
  loggedIn: false,
  login: () => {},
  logout: () => {},
})

const setLocalStorage = response => {
  return new Promise((resolve, reject) => {
    localStorage.setItem("AccessToken", response.AccessToken)
    localStorage.setItem("IdToken", response.IdToken)
    localStorage.setItem("TokenType", response.TokenType)
    localStorage.setItem("name", response.user.name)
    localStorage.setItem("userId", response.user.id)
    localStorage.setItem("companyId", response.companyId)
    localStorage.setItem("ExpiresIn", response.ExpiresIn)
    localStorage.setItem("RefreshToken", response.RefreshToken)
    localStorage.setItem("company", JSON.stringify(response.company))
    localStorage.setItem(
      "deliveryAddress",
      JSON.stringify(response.user.address)
    )
    localStorage.setItem("facilities", JSON.stringify(response.facilities))
    localStorage.setItem("user", JSON.stringify(response.user))
    resolve()
  })
}

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(localStorage.user ? true : false)

  const login = (email, password) => {
    fetch("https://cryptic-stream-41886.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(response => {
        setLocalStorage(response).then(() => {
          setLoggedIn(true)
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  const logout = () => {
    setLoggedIn(false)
    localStorage.removeItem("AccessToken")
    localStorage.removeItem("IdToken")
    localStorage.removeItem("TokenType")
    localStorage.removeItem("name")
    localStorage.removeItem("userId")
    localStorage.removeItem("companyId")
    localStorage.removeItem("ExpiresIn")
    localStorage.removeItem("RefreshToken")
    localStorage.removeItem("company")
    localStorage.removeItem("deliveryAddress")
    localStorage.removeItem("facilities")
    localStorage.removeItem("user")
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
