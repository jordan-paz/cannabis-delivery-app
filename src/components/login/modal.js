import React, { useContext, useEffect } from "react"
import authContext from "../../context/authContext"

import Dialog from "@material-ui/core/Dialog"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

import CloseIcon from "../../images/close-x-black.svg"

import Form from "./form"
import Spinner from "../loadingSpinner"
import SignUpSection from "./signUpSection.js"
import { DialogWrapper, StyledTitle, CloseButton } from "./styledComponents"

export default ({ open, handleClose }) => {
  const { loading, login, loggedIn } = useContext(authContext)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))

  useEffect(() => {
    if (loggedIn) {
      handleClose()
    }
  }, [loggedIn])

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
        {loading ? (
          <Spinner />
        ) : (
          <>
            <SignUpSection />
            <Form handleClose={handleClose} login={login} />
          </>
        )}
      </DialogWrapper>
    </Dialog>
  )
}
