import React, { useState } from "react"
import { Link } from "gatsby"
import { useIdentityContext } from "react-netlify-identity"

import { StyledForm, FormWrapper, Title, CloseButton } from "./styledComponents"
import GlobalStyle from "../../styles/global"
import TextField from "@material-ui/core/TextField"
import CloseIcon from "../../images/close-x-black.svg"

export default () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    password2: "",
    phoneNumber: "",
    fullName: "",
    birthday: "",
  })

  const [msg, setMsg] = useState("")

  const { signupUser } = useIdentityContext()

  const signup = () => {
    signupUser(values.email, values.password)
      .then(user => {
        console.log("Success! Signed up", user)
      })
      .catch(err => console.error(err) || setMsg("Error: " + err.message))
  }

  const onSubmit = e => {
    e.preventDefault()
    signup()
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <FormWrapper>
      <GlobalStyle />
      <Title>Sign Up</Title>
      <Link to="/">
        <CloseButton>
          <img src={CloseIcon} alt="Close" />
        </CloseButton>
      </Link>
      <StyledForm onSubmit={e => onSubmit(e)}>
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
        <input type="submit" value="Submit" />
        {msg && <pre>{msg}</pre>}
      </StyledForm>
    </FormWrapper>
  )
}
