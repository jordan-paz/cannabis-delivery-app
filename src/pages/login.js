import React, { useState } from "react"
import axios from "axios"
import { AuthContext } from "../context/authContext"

const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const onSubmit = (e, login) => {
    e.preventDefault()
    console.log(email, password)
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    const data = {
      email: email,
      password: password,
    }

    axios
      .post("https://app.webjoint.com/prod/api/users/login", data, config)
      .then(function(response) {
        console.log(response)
        login()
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  return (
    <AuthContext.Consumer>
      {({ loggedIn, login, logout }) => (
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
      )}
    </AuthContext.Consumer>
  )
}

export default Login
