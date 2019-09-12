import React from "react"
import Button from "@material-ui/core/Button"
import { OpenModalButton } from "./styledComponents"

export default ({ handleClickOpen }) => (
  <OpenModalButton
    variant="outlined"
    color="primary"
    onClick={() => handleClickOpen()}
  >
    LOGIN
  </OpenModalButton>
)
