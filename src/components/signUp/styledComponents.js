import styled from "styled-components"

import DialogTitle from "@material-ui/core/DialogTitle"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

export const DialogWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
  align-items: center;
`

export const CloseButton = styled(Button)`
  position: absolute;
  right: 10px;
  top: 10px;
`

export const SubmitButton = styled(Button)`
  width: 100%;
  background-color: #eee;
`

export const StyledTitle = styled(DialogTitle)``

export const StyledTextField = styled(TextField)``
