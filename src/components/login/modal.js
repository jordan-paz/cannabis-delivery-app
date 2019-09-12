import React from "react"

import Dialog from "@material-ui/core/Dialog"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

import CloseIcon from "../../images/close-x-black.svg"

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
        <CloseButton onClick={handleClose}>
          <img src={CloseIcon} alt="Close" />
        </CloseButton>
        <StyledTitle id="responsive-dialog-title">Log in</StyledTitle>
        <Form />
      </DialogWrapper>
    </Dialog>
  )
}
