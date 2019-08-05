import React, { useState } from "react"
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const onSubmit = e => {
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
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  return (
    <form onSubmit={onSubmit}>
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
        <span>
          Forgot <a href="#">password?</a>
        </span>
      </div>
    </form>
  )
}

export default Login
