import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { StyledForm } from "./styledComponents"
import SubmitButton from "./submitButton"

export default ({ login }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    login(values.email, values.password)
  }

  return (
    <StyledForm onSubmit={e => handleSubmit(e)}>
      <TextField
        id="outlined-name"
        label="Email"
        value={values.email}
        onChange={handleChange("email")}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        value={values.password}
        onChange={handleChange("password")}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <SubmitButton />
    </StyledForm>
  )
}
