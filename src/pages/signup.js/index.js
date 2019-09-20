import React, { useState, useContext } from "react"
import AuthContext from "../../context/authContext"
import Form from "./form"

export default () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    password2: "",
    phoneNumber: "",
  })

  return <Form />
}
