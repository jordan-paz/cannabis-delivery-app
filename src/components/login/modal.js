import React from "react"

import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

import Form from "./form"

import { DialogWrapper, StyledTitle, CloseButton } from "./styledComponents"

export default ({ open, handleClose }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogWrapper>
        <CloseButton onClick={handleClose}>X</CloseButton>
        <StyledTitle id="responsive-dialog-title">Log in</StyledTitle>
        <Form />
      </DialogWrapper>
    </Dialog>
  )
}
