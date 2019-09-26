import React, { useState } from "react"
import { Link } from "gatsby"
import GlobalStyle from "../../styles/global"
import TextField from "@material-ui/core/TextField"
import { StyledForm, FormWrapper, Title, CloseButton } from "./styledComponents"
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
      <StyledForm>
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
      </StyledForm>
    </FormWrapper>
  )
}
