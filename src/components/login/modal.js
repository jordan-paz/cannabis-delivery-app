import React, { useContext, useEffect } from "react"
import authContext from "../../context/authContext"

import CloseIcon from "../../images/close-x-black.svg"

import Form from "./form"
import Spinner from "../loadingSpinner"
import SignUpSection from "./signUpSection.js"
import {
  DialogWrapper,
  StyledTitle,
  CloseButton,
  StyledDialog,
} from "./styledComponents"

export default ({ open, handleClose }) => {
  const { loading, login, loggedIn } = useContext(authContext)

  useEffect(() => {
    if (loggedIn) {
      handleClose()
    }
  }, [loggedIn])

  return (
    <StyledDialog
      fullScreen
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
    </StyledDialog>
  )
}
