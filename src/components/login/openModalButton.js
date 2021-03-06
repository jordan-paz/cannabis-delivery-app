import React from "react"
import { OpenModalButton } from "./styledComponents"

export default ({ handleClickOpen }) => (
  <OpenModalButton
    variant="outlined"
    color="primary"
    onClick={() => handleClickOpen()}
  >
    LOG IN
  </OpenModalButton>
)
