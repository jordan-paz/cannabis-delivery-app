import React, { useState } from "react"
import { AuthContext } from "../context/authContext"
import { navigate } from "@reach/router"

const Login = props => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const onSubmit = (e, login) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <AuthContext.Consumer>
      {({ login, loggedIn }) => {
        if (loggedIn) navigate("/")
        return (
          <form onSubmit={e => onSubmit(e, login)}>
            <div>
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />

              <label htmlFor="password">
                <b>Password</b>
              </label>
              <input
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />

              <button type="submit">Login</button>
            </div>

            <div>
              <button type="button">Cancel</button>
              <span>Forgot password?</span>
            </div>
          </form>
        )
      }}
    </AuthContext.Consumer>
  )
}

export default Login
