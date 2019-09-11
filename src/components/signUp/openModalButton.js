import React from "react"
import Button from "@material-ui/core/Button"

export default ({ handleClickOpen }) => (
  <Button variant="outlined" color="primary" onClick={() => handleClickOpen()}>
    LOGIN
  </Button>
)
